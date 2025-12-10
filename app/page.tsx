import { getPlanets } from "@/lib/api";

export default async function Home() {
  const planets = await getPlanets();

  

  return (
   <main className="p-6 min-h-screen text-center  backdrop-blur-xl">
      <img
        src="/logo.png"
        alt="Planetz Logo"
        className="w-32 mb-6 bject-contain mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
      />

    <h1 className="text-4xl font-extrabold mb-2 bg-clip-text text-transparent
      bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300">
      Planets
    </h1>

    <p className="opacity-70">Explore your cosmic database</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {planets.map((p) => (
         
          <a
  key={p.id}
  href={`/planet/${p.id}`}
  className="
    group relative p-4 rounded-2xl border border-white/10 
    bg-white/5 backdrop-blur-xl transition 
    hover:bg-white/10 hover:border-white/20
    shadow-lg hover:shadow-xl
  "
>
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition bg-white"></div>

  <img
    src={`/${p.title.toLowerCase()}.png`}
    alt={p.title}
    className="mb-3 w-36 h-36 object-contain mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] 
               transition-transform group-hover:scale-105"
  />

  <h2 className="text-xl font-semibold tracking-wide text-center">
    {p.title}
  </h2>

  <p className="text-sm opacity-75 text-center mt-1">
    {p.description}
  </p>
</a>
        
        ))}
      </div>
    </main>
  );
}
