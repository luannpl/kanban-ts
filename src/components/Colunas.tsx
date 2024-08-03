import React from "react";

interface ColunasProps {
  title: string;
  conteudo: React.ReactNode;
}

export default function Colunas({ title, conteudo }: ColunasProps) {
  return (
    <>
      <div className="border-2 border-slate-200 rounded-md w-3/12 h-full">
        <div className="text-center rounded-sm text-slate-100 bg-slate-800 py-2">
          {title}
        </div>
        <div className="bg-slate-400 h-full w-full flex-wrap text-slate-800 p-4">
            {conteudo }</div>
      </div>
    </>
  );
}
