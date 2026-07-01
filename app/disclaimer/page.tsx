import Footer from '@/components/Footer'; import Header from '@/components/Header';
export const metadata = { title: '고지사항' };
export default function Disclaimer(){ return <main className="min-h-screen bg-black"><Header/><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-4xl font-black">고지사항</h1><p className="mt-5 text-white/65">NEWMB.chat은 비공식 패러디 서비스입니다. 실제 홍명보 감독 또는 축구 관련 기관과 무관하며, 답변은 AI/로컬 템플릿이 생성한 창작 패러디입니다. 실제 인터뷰 인용처럼 표시하지 않습니다.</p></section><Footer/></main> }
