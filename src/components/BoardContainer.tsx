import React, { KeyboardEvent, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Colunas from "./Colunas";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

type ColumnsType = {
  // backlog: { name: string; date: string }[];
  // todo: { name: string; date: string }[];
  // inProgress: { name: string; date: string }[];
  // done: { name: string; date: string }[];
  [key: string]: { name: string; date: string }[];
};

export default function BoardContainer() {
  const [userName, setUserName] = useState("");
  const [namesList, setNamesList] = useState<{ name: string; date: string }[]>([]);
  const [columns, setColumns] = useState<ColumnsType>({
    backlog: namesList,
    todo: [],
    inProgress: [],
    done: []
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleClick = () => {
    if (userName.trim()) {
      const now = new Date();
      const formattedDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newCard = { name: userName, date: formattedDate };
      setNamesList([...namesList, newCard]);
      setColumns({
        ...columns,
        backlog: [...columns.backlog, newCard]
      });
      setUserName("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
        <div className="flex  w-screen">
      <div className="flex w-full max-w-sm items-end space-x-2 pl-4 pt-8">
        <div>
          <Input
            className="bg-slate-600 text-slate-100 placeholder-slate-100 focus:border-slate-200"
            type="text"
            value={userName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Add task"
          />
        </div>
        <div>
          <Button onClick={handleClick} type="submit" className="bg-slate-800 hover:bg-slate-700">
            Enviar
          </Button>
        </div>
      </div>
        <div className="w-1/2 justify-center flex" ><h1 className="text-3xl text-end h-full  flex items-end font-semibold">Kanban do Luan</h1></div>
        </div>
      <div className="w-full border-0 flex space-x-4 p-4">
        <Colunas title="Backlog" items={columns.backlog} setColumns={setColumns} columnId="backlog" />
        <Colunas title="To Do" items={columns.todo} setColumns={setColumns} columnId="todo" />
        <Colunas title="In Progress" items={columns.inProgress} setColumns={setColumns} columnId="inProgress" />
        <Colunas title="Done" items={columns.done} setColumns={setColumns} columnId="done" />
      </div>
    </DndProvider>
  );
}





