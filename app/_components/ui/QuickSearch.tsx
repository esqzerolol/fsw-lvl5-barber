import { Button } from "./button";
import Image from "next/image";
import { quickSearchItems } from "../../_constants/search";

export default function QuickSearch() {
  return (
    <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {quickSearchItems.map((item) => (
        <Button key={item.title} variant="secondary">
          <Image src={item.imageUrl} alt={item.title} width={16} height={16} />
          {item.title}
        </Button>
      ))}
    </div>
  );
}
