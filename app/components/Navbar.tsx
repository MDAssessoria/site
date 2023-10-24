import Link from "next/link";

export default function NavBar() {
  return(
    <header className="absolute flex w-screen items-center">
      <nav className="flex w-full items-center justify-between px-24 py-12">
        <span>MDassessoria</span>
        <ul className="hidden md:flex">
          <li><Link href="#" className="p-4">Home</Link></li>
          <li><Link href="#" className="p-4">Exhibitions</Link></li>
          <li><Link href="#" className="p-4">Collections</Link></li>
          <li><Link href="#" className="p-4">Informations</Link></li>
          <li><Link href="#" className="px-6 py-3 rounded border-2 border-zinc-50 text-zinc-50 font-semibold">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}