'use client';
import { toPng } from 'html-to-image';
import { useRef, useState } from 'react';
import type { NewMbReply } from '@/lib/memes';

export default function MemeCard({ question, reply }: { question: string; reply: NewMbReply }) {
  const posterRef = useRef<HTMLDivElement>(null);
  const talkRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  async function save(ref: React.RefObject<HTMLDivElement>, name: string) {
    if (!ref.current) return;
    const dataUrl = await toPng(ref.current, { cacheBust: true, pixelRatio: 2 });
    const a = document.createElement('a'); a.href = dataUrl; a.download = name; a.click();
  }
  async function copyText() { await navigator.clipboard.writeText(`${reply.keyword}\n\n${reply.lines.join('\n')}\n\nnewmb.chat`); setCopied(true); setTimeout(()=>setCopied(false),1200); }

  return <div className="mt-6 grid gap-4 lg:grid-cols-2">
    <section className="glass rounded-3xl p-4">
      <div ref={posterRef} className="aspect-square rounded-2xl bg-black p-8 text-white shadow-glow">
        <div className="h-1 w-16 bg-red-500" />
        <p className="mt-8 text-xs uppercase tracking-[.35em] text-white/45">NEWMB.chat</p>
        <h2 className="mt-8 text-5xl font-black text-red-500">{reply.keyword}</h2>
        <div className="mt-8 space-y-3 text-2xl font-bold leading-tight">{reply.lines.map((l,i)=><p key={i}>{l}</p>)}</div>
        <p className="mt-10 text-sm text-white/35">newmb.chat</p>
      </div>
      <button onClick={()=>save(posterRef,'newmb-poster.png')} className="mt-3 w-full rounded-xl bg-white px-4 py-3 font-bold text-black">포스터 짤 저장</button>
    </section>

    <section className="glass rounded-3xl p-4">
      <div ref={talkRef} className="aspect-square rounded-2xl bg-[#b2c7d9] p-5 text-black">
        <div className="text-center text-xs text-black/45">NEWMB.chat</div>
        <div className="mt-5 max-w-[80%] rounded-2xl bg-white px-4 py-3 text-sm shadow">{question || '감독님, 인생도 전술입니까?'}</div>
        <div className="ml-auto mt-4 max-w-[82%] rounded-2xl bg-[#ffeb33] px-4 py-3 shadow">
          <b>{reply.keyword}</b>
          <div className="mt-2 space-y-1 whitespace-pre-line text-sm font-medium">{reply.lines.join('\n')}</div>
        </div>
        <div className="mt-6 text-center text-xs text-black/35">비공식 패러디 · newmb.chat</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2"><button onClick={()=>save(talkRef,'newmb-kakao-style.png')} className="rounded-xl bg-yellow-300 px-4 py-3 font-bold text-black">카톡 스타일 저장</button><button onClick={copyText} className="rounded-xl bg-white/10 px-4 py-3 font-bold text-white">{copied?'복사됨':'문구 복사'}</button></div>
    </section>
  </div>
}
