# NEWMB.chat MVP

이번 주 출시용 최소 기능 버전입니다.

## 기능
- 메인 AI 채팅
- OpenAI API 키 없으면 로컬 밈 답변으로 작동
- 포스터 짤 PNG 저장
- 카톡 스타일 짤 PNG 저장
- 문구 복사
- SEO 기본 페이지: `/memes`, `/privacy`, `/terms`, `/disclaimer`
- sitemap, robots, manifest, ads.txt
- 개인정보 노출 최소화: 로그인 없음, 질문 DB 저장 없음, `.env.local` GitHub 제외

## 실행
```bash
npm install
npm run dev
```

## 환경변수
`.env.local` 생성:
```bash
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
NEXT_PUBLIC_SITE_URL=https://newmb.chat
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
```

`OPENAI_API_KEY`를 비워도 로컬 밈 답변으로 작동합니다.

## GitHub 업로드
```bash
git init
git add .
git commit -m "launch mvp"
git branch -M main
git remote add origin https://github.com/YOURNAME/newmb-chat.git
git push -u origin main
```

## Vercel 배포
1. Vercel → Add New Project
2. GitHub 저장소 선택
3. Framework: Next.js 자동 감지
4. Environment Variables에 OPENAI_API_KEY 추가
5. Deploy

## AdSense
승인 전에는 자리 표시만 나옵니다. 승인 후 `components/AdSlot.tsx`에 AdSense 코드를 넣고 `public/ads.txt`를 수정하세요.

## 법적/운영 메모
- 공식 인물 사칭 금지
- 실제 인터뷰 인용처럼 표시 금지
- 패러디/비공식 고지 유지
