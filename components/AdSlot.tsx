export default function AdSlot({ label = '광고 영역' }: { label?: string }) {
  return <div className="glass mx-auto my-5 flex min-h-[90px] w-full max-w-3xl items-center justify-center rounded-2xl text-xs text-white/40">{label} · AdSense 승인 후 코드 삽입</div>;
}
