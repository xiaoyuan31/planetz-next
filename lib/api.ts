export async function getPlanets() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getPlanetByID(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/planets/${id}`, {
      cache: "no-store",
    });

    // If response is not OK, throw error
    if (!res.ok) {
      console.error("API error:", res.status, await res.text());
      return null; // fallback
    }

    // Only parse JSON if the response has content
    const text = await res.text();
    if (!text) return null;
    return JSON.parse(text);

  } catch (error) {
    console.error("Failed to fetch planet:", error);
    return null;
  }
}


export async function getMoons() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/moons`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getCategoryByID(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getMoonListByPlanet(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/moons/planet/${id}`, {
    cache: "no-store",
  });
  return res.json();
}