import Link from 'next/link';
export default function Header(){ return <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5"><Link href="/" className="text-xl font-black tracking-tight">⚽ NEWMB.chat</Link><nav className="flex gap-4 text-sm text-white/70"><Link href="/memes">Memes</Link><a href="https://vercel.com" target="_blank">Deploy</a></nav></header> }
