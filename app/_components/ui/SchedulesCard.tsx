import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function SchedulesCard() {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">Confirmado</Badge>
          <h3 className="font-semibold">Corte de cabelo</h3>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-sm">Barbearia FSW</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
          <p className="text-sm">Agosto</p>
          <p className="text-2xl">05</p>
          <p className="text-sm">99:99</p>
        </div>
      </CardContent>
    </Card>
  );
}
