import { db } from "./_lib/prisma";
import HomeContent from "./_components/HomeContent";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  });

  return (
    <HomeContent
      barbershops={barbershops}
      popularBarbershops={popularBarbershops}
    />
  );
}
