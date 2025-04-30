'use client';
import Link from "next/link";
import { useEffect } from 'react';
export default function Home() {
  
  useEffect(() => {
  }, []);
  
  
  return (
    <>
      <header className="flex justify-center text-5xl text-white pt-20">
        <p className="p-4">Ciao sono la home!</p>
      </header>
      <main className="text-center text-white pt-15 text-2xl cursor-pointer">
        <Link href="/inner/ssrtest">Vai al test...</Link>
      </main>
      <footer className="text-center text-white pt-15 text-2xl cursor-pointer">
        <stencil-button>Stencil button</stencil-button>
      </footer>
    </>
  );
}
