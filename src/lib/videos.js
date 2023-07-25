export async function getVideoList() {
  console.log(`${process.env.MAYHEM_URL}/videos`);
  const response = await fetch(`${process.env.MAYHEM_URL}/videos`, {
    next: { cache: "no-store", revalidate: 0 },
  });
  if (!response.ok) throw new Error("Failed to fetch video listing");
  return response.json();
}

export async function getVideoById(id) {
  const response = await fetch(`${process.env.MAYHEM_URL}/videos/${id}`, {
    next: { cache: "no-store", revalidate: 0 },
  });
  if (!response.ok) throw new Error("Failed to fetch video details");

  return response.json();
}
