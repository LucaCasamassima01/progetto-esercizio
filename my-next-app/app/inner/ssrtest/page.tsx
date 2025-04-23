export const dynamic = "force-dynamic";  


async function getCatFact() {
    
    
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);

  if (!res.ok) {
    throw new Error('Errore nel recupero del fatto');
  }

  
  const fact = await res.text();  
  return fact;  
}

export default async function Page() {
  
  const fact = await getCatFact();

  return (
    <main className="flex flex-col justify-center items-center h-screen text-white p-10 text-center">
      <h1 className="text-5xl mb-6">Ciao, sono la inner</h1>
      <p className="text-2xl max-w-xl">{fact}</p>
    </main>
  );
}
