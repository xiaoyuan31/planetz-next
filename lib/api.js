export async function getPlanets() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/planets`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getMoons() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/moons`, {
    cache: "no-store",
  });
  return res.json();
}