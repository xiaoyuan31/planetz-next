
import Image from "next/image";
import { getCategoryByID, getFactsByPlanet, getMoonListByPlanet, getPlanetByID } from "@/lib/api";

interface Props {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function PlanetDetailPage({ params }: Props) {
  // If params is a Promise, await it
  const { id } = params instanceof Promise ? await params : params;

  const planet = await getPlanetByID(id);

  const category = await getCategoryByID(planet.categoryid);

  const moonList = await getMoonListByPlanet(id);

  const facts = await getFactsByPlanet(id);

  if (!planet) {
    return <div className="text-center mt-10">Planet not found or API error!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{planet.title}</h1>
      <Image
        src={`/${planet.title.toLowerCase()}_bg.png`}
        alt={planet.title}
        width={200}
        height={200}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
      /> 

      <Image
        src={`/${planet.title.toLowerCase()}.png`}
        alt={planet.title}
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg mb-2">{planet.description}</p>
      <p className="mt-2 text-sm text-gray-400">Diameter: {planet.diameter_km} km</p>
      <p className="mt-1 text-sm text-gray-400">Distance from Sun: {planet.distance_thesun_km} million km</p>
      <p className="mt-1 text-sm text-gray-400">Distance from Sun: {planet.distance_thesun_au} million au</p>
      
      
       <h1 className="text-4xl mt-10 font-bold mb-4">Category</h1>
     {category && (
      <>
          <p className="mt-7 text-2xl">{category.title}</p>
          <p className="mt-2 text-sm">{category.description}</p>
        </>
      )}

      
       <h1 className="text-4xl mt-10 font-bold mb-4">Moon List</h1>
      {moonList && (
        <>
          <div className="overflow-x-auto whitespace-nowrap py-4 scrollbar-hide scroll-smooth">
            {moonList.map((moon: any) => (
              <div
                key={moon.id}
                className="inline-block bg-gray-900 rounded-lg p-3 m-2 w-40 "
              >
              
                <p className="text-2xl text-gray-500">{moon.title}</p>
                <p className="mt-3 text-sm">
                  Discovered : {moon.discovered}
                </p>
                <p className="mt-3 text-sm">
                  distance : {moon.distance}
                </p>
                <p className="mt-3 text-sm">
                  diameter : {moon.diameter}
                </p>
                <p className="mt-3 text-sm">
                  orbital_period : {moon.orbital_period}
                </p>
              </div>
            ))}
          </div>
        </>
      )}


       <h1 className="text-4xl mt-10 font-bold mb-4">Interesting Facts</h1>
      <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      {facts.map((fact: any) => (
        <div key={fact.id} className="flex-none w-40 snap-start ...">
          <div className="flex-none bg-gray-900 rounded-lg p-3 w-40 text-white hover:bg-gray-800 transition">
            <p className="text-sm">{fact.description}</p>
          </div>
        </div>
      ))}
    </div>


      

    </div>
  );
}
