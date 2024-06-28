"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()

  return (
    <header className="flex-space-between">
      {pathname === "/map" && (
        <button onClick={() => router.push('/')}>← Back</button>
      )}
      <h2><Link href="/">InstaStore</Link></h2>
      <Link href="/about">About</Link>
    </header>
  );
}
