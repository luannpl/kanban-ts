import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./dndTypes";
import Card from "./Card";

type ColunasProps = {
  title: string;
  conteudo?: React.ReactNode;
  items: { name: string; date: string }[];
  setColumns: React.Dispatch<React.SetStateAction<{ [key: string]: { name: string; date: string }[] }>>;
  columnId: string;
}

const Colunas: React.FC<ColunasProps> = ({ title, conteudo, items, setColumns, columnId }) => {
  const moveItemWithinColumn = (columnId: string, dragIndex: number, hoverIndex: number) => {
    setColumns(prevColumns => {
      const columnItems = [...prevColumns[columnId]];
      const [movedItem] = columnItems.splice(dragIndex, 1);
      columnItems.splice(hoverIndex, 0, movedItem);
      
      return {
        ...prevColumns,
        [columnId]: columnItems,
      };
    });
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: { name: string; date: string; columnId: string; index: number, hoverIndex: number }, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = monitor.getItem().hoverIndex;
      const targetColumn = columnId;

      if (item.columnId === targetColumn && dragIndex !== hoverIndex) {
        moveItemWithinColumn(targetColumn, dragIndex, hoverIndex);
      } else if (item.columnId !== targetColumn) {
        setColumns(prevColumns => {
          const sourceColumn = item.columnId;
          const targetColumn = columnId;

          const sourceItems = [...prevColumns[sourceColumn]];
          const targetItems = [...prevColumns[targetColumn]];

          const [movedItem] = sourceItems.splice(item.index, 1);
          targetItems.splice(hoverIndex, 0, movedItem);

          return {
            ...prevColumns,
            [sourceColumn]: sourceItems,
            [targetColumn]: targetItems,
          };
        });
      }
    },
  });

  return (
    <div ref={drop} className="border-2 border-slate-200 rounded-md w-3/12 min-h-72">
      <div className="text-center rounded-sm text-slate-100 bg-slate-800 py-2">
        {title}
      </div>
      <div className="bg-slate-400 rounded-b-md h-full w-full flex-wrap text-slate-800 p-4">
        {items.map((item, index) => (
          <Card conteudoCard={item} key={index} columnId={columnId} index={index} />
        ))}
        {conteudo}
      </div>
    </div>
  );
};

export default Colunas;

