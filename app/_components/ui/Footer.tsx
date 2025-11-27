import { Card, CardContent } from "./card";

export default function Footer() {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-3">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
}
