import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { localReply, formatReply } from '@/lib/memes';
import { systemPrompt } from '@/lib/prompt';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'anon';
  const limited = rateLimit(ip);
  if (!limited.ok) return NextResponse.json({ error: '질문이 너무 빠릅니다. 잠시 후 다시 시도하세요.' }, { status: 429 });

  const { question } = await req.json().catch(()=>({ question: '' }));
  const q = String(question || '').slice(0, 280).trim();
  if (!q) return NextResponse.json({ error: '질문이 비어 있습니다.' }, { status: 400 });

  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: formatReply(localReply(q)), source: 'local' });

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.9,
      max_tokens: 120,
      messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: q }]
    });
    const answer = completion.choices[0]?.message?.content || formatReply(localReply(q));
    return NextResponse.json({ answer, source: 'openai' }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ answer: formatReply(localReply(q)), source: 'fallback' });
  }
}
