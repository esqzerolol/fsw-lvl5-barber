import BarbershopItem from "./barbershop-item";

export default function BarbershopList({ items }) {
  return (
    <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
      {items.map((barbershop) => (
        <BarbershopItem key={barbershop.id} barbershop={barbershop} />
      ))}
    </div>
  );
}
