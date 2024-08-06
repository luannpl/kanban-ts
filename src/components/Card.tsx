import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './dndTypes';
import User from './User';

type CardProps = {
  conteudoCard: { name: string; date: string };
  columnId: string; /*coluna do card*/
  index: number; /*posicao do card na coluna*/
};

const Card: React.FC<CardProps> = ({ conteudoCard, columnId, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { ...conteudoCard, columnId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (item: { index: number, columnId: string }) => {
      if (item.index !== index && item.columnId === columnId) {
        item.index = index;
      }
    }
  });

  return (
    <div ref={(node) => drag(drop(node))} className={`bg-slate-800 text-slate-100 rounded-md mb-4 p-2 flex flex-col space-y-2 cursor-pointer shadow-xl shadow-slate-800/50 ${isDragging ? 'opacity-0' : ''}`}>
      <div className="flex flex-row space-x-2">
        <div className="flex-1 w-44 h-auto break-words cursor-pointer">
          {conteudoCard.name}
        </div>
        <User />
      </div>
      <div className="text-slate-400 text-sm self-end">
        {conteudoCard.date}
      </div>
    </div>
  );
};

export default Card;

