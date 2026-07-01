'use client';
import { useMemo, useState } from 'react';
import { Send, Shuffle } from 'lucide-react';
import MemeCard from '@/components/MemeCard';
import { localReply, starters, type NewMbReply } from '@/lib/memes';

type Msg = { role: 'user' | 'assistant'; content: string };

function parseReply(text: string): NewMbReply {
  const clean = text.trim().replace(/\n{3,}/g, '\n\n');
  const parts = clean.split('\n').map((s)=>s.trim()).filter(Boolean);
  const keyword = (parts[0] || 'Reset').replace(/[^a-zA-Z]/g, '') || 'Reset';
  const lines = parts.slice(1,5).length ? parts.slice(1,5) : ['오늘은 여기까지입니다.', '다음 경기 준비하세요.'];
  return { keyword, lines };
}

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [reply, setReply] = useState<NewMbReply>(()=>localReply('오늘의 시작'));
  const suggestions = useMemo(()=>starters, []);

  async function ask(q = question) {
    const trimmed = q.trim(); if (!trimmed || loading) return;
    setQuestion(''); setLoading(true);
    setMessages((m)=>[...m,{ role:'user', content: trimmed }]);
    try {
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ question: trimmed }) });
      const data = await res.json();
      const next = parseReply(data.answer || 'Reset\n\n다시 준비하세요.');
      setReply(next);
      setMessages((m)=>[...m,{ role:'assistant', content: `${next.keyword}\n${next.lines.join('\n')}` }]);
      const saved = JSON.parse(localStorage.getItem('newmb_recent') || '[]');
      localStorage.setItem('newmb_recent', JSON.stringify([{ question: trimmed, reply: next, at: Date.now() }, ...saved].slice(0, 20)));
    } catch {
      const next = localReply(trimmed); setReply(next);
      setMessages((m)=>[...m,{ role:'assistant', content: `${next.keyword}\n${next.lines.join('\n')}` }]);
    } finally { setLoading(false); }
  }

  function randomQ(){ const q=suggestions[Math.floor(Math.random()*suggestions.length)]; setQuestion(q); }

  return <section className="mx-auto max-w-5xl px-4">
    <div className="glass rounded-[2rem] p-5 shadow-glow md:p-8">
      <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-2">
        <input value={question} onChange={(e)=>setQuestion(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter') ask();}} placeholder="질문을 입력하세요. 예: 책임은 누가 집니까?" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base outline-none placeholder:text-white/35" />
        <button onClick={randomQ} className="rounded-xl bg-white/10 p-3 text-white" aria-label="랜덤 질문"><Shuffle size={20}/></button>
        <button onClick={()=>ask()} disabled={loading} className="rounded-xl bg-red-500 p-3 font-bold text-white disabled:opacity-50" aria-label="질문하기"><Send size={20}/></button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{suggestions.slice(0,6).map((s)=><button key={s} onClick={()=>ask(s)} className="rounded-full bg-white/8 px-3 py-2 text-xs text-white/70 hover:bg-white/15">{s}</button>)}</div>
      <div className="mt-6 rounded-2xl bg-black/40 p-5">
        <p className="text-sm text-white/35">NEWMB 답변</p>
        <h2 className="mt-2 text-4xl font-black text-red-500">{reply.keyword}</h2>
        <div className="mt-4 space-y-2 text-xl font-bold leading-snug">{reply.lines.map((l,i)=><p key={i}>{l}</p>)}</div>
      </div>
    </div>
    <MemeCard question={messages.filter(m=>m.role==='user').at(-1)?.content || question} reply={reply}/>
  </section>
}
