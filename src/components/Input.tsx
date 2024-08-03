import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Entrada() {
  return (
    <>
      <div className="flex w-full max-w-sm items-end space-x-2 pl-4 pt-8">
        <div>
          Add task
          <Input
            className="bg-slate-600 text-slate-100 placeholder-slate-100 focus:border-slate-200"
            type="text"
            placeholder="Texto"
          />
        </div>
        <div>
        <Button type="submit" className="bg-slate-800 ">
          Enviar
        </Button>
        </div>
      </div>
    </>
  );
}
