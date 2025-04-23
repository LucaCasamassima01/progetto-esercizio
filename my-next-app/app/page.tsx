import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="flex justify-center text-5xl text-white pt-20">
        <p className="p-4">Ciao sono la home!</p>
      </header>
      <main className="text-center text-white pt-15 text-2xl cursor-pointer">
        <Link href="/inner/ssrtest">Vai al test...</Link>
      </main>
    </>
  );
}
