import Footer from '@/components/Footer'; import Header from '@/components/Header';
export const metadata = { title: '이용약관' };
export default function Terms(){ return <main className="min-h-screen bg-black"><Header/><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-4xl font-black">이용약관</h1><p className="mt-5 text-white/65">본 서비스는 엔터테인먼트 목적의 패러디 밈 생성기입니다. 생성된 답변은 사실 확인된 조언이나 공식 발언이 아닙니다. 불법, 혐오, 사칭, 개인정보 노출 목적의 이용을 금지합니다.</p></section><Footer/></main> }
