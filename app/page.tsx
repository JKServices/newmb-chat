import AdSlot from '@/components/AdSlot';
import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home(){
  return <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(239,68,68,.22),transparent_35%),#050505]">
    <Header />
    <section className="mx-auto max-w-5xl px-4 pb-8 pt-8 text-center md:pt-14">
      <p className="text-sm font-bold uppercase tracking-[.35em] text-red-400">Meme Coach Generator</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">NEWMB.chat</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">축구식 인생 밈 생성기. 짧게 묻고, 짧게 맞고, 포스터와 카톡 스타일 짤로 저장하세요.</p>
      <p className="mt-3 text-xs text-white/40">비공식 패러디 서비스 · 실제 인물/단체의 공식 발언이 아닙니다.</p>
    </section>
    <AdSlot label="상단 광고" />
    <Chat />
    <section className="mx-auto mt-10 grid max-w-5xl gap-4 px-4 md:grid-cols-3">
      {[
        ['Fast','답변은 5줄 이내. 길게 말하면 이미 진 겁니다.'],
        ['Share','포스터와 카톡 스타일 이미지를 바로 저장합니다.'],
        ['Private','로그인 없음. 질문은 기본적으로 서버 DB에 저장하지 않습니다.']
      ].map(([k,v])=><div key={k} className="glass rounded-3xl p-5"><h3 className="text-2xl font-black text-red-500">{k}</h3><p className="mt-3 text-white/60">{v}</p></div>)}
    </section>
    <AdSlot label="하단 광고" />
    <Footer />
  </main>
}
