import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="gap-4 ">
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritary">teritary</Button>
      <Input />
    </div>
  );
}
