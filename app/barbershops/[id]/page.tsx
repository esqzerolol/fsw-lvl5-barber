import PhoneItem from "@/app/_components/phone-item";
import { Button } from "@/app/_components/ui/button";
import Footer from "@/app/_components/ui/Footer";
import ServiceItem from "@/app/_components/ui/service-item";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const barbershop = await db.barbershop.findUnique({
    where: { id },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          className="absolute left-4 top-4"
          variant="secondary"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* INFOS */}
      <div className="border border-solid p-5">
        <h1 className="mb-2 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-1 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="mb-1 flex items-center gap-1">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">TODO: CRIAR SISTEMA DE AVALIACAO</p>
        </div>
      </div>

      {/* DESCRICAO */}
      <div className="space-y-3 border border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Descrição</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVICOS */}
      <div className="space-y-3 border border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-4">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="space-y-3 border p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
}
