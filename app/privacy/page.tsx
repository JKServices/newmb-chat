import Footer from '@/components/Footer'; import Header from '@/components/Header';
export const metadata = { title: '개인정보처리방침' };
export default function Privacy(){ return <main className="min-h-screen bg-black"><Header/><section className="mx-auto max-w-3xl px-4 py-10"><h1 className="text-4xl font-black">개인정보처리방침</h1><p className="mt-5 text-white/65">NEWMB.chat MVP는 로그인 없이 작동하며, 질문을 서버 데이터베이스에 저장하지 않는 것을 기본 원칙으로 합니다. OpenAI API를 연결한 경우 질문은 답변 생성을 위해 API 제공자에게 전송될 수 있습니다. 광고/분석 도구를 연결하면 해당 서비스의 정책이 적용될 수 있습니다.</p></section><Footer/></main> }
