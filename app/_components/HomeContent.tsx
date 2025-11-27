import Header from "./ui/header";
import QuickSearch from "./ui/QuickSearch";
import SchedulesCard from "./ui/SchedulesCard";
import BarbershopList from "./ui/BarbershopList";
import Footer from "./ui/Footer";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function HomeContent({ barbershops, popularBarbershops }) {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Salve carai</h2>
        {/* Subtítulo/Data dinâmica */}
        <p>COLOCAR_DATA_DINAMICA</p>

        {/* Barra de pesquisa */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquise aqui!" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Pesquisa rápida */}
        <QuickSearch />

        {/* Seção de agendamentos */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <SchedulesCard />

        {/* Seção de recomendações */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendações
        </h2>
        <BarbershopList items={barbershops} />

        {/* Seção de mais populares */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Mais Populares
        </h2>
        <BarbershopList items={popularBarbershops} />
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
