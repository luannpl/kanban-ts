import Colunas from "./Colunas";
import Card from "./Card";

export default function BoardContainer(){
    return (
        <>
        <div className="w-full border-0 flex space-x-4 p-4">
            <Colunas title="Backlog" conteudo={<Card/>}/>
            <Colunas title="To Do" conteudo="Olá"/>
            <Colunas title="In Progress" conteudo="Olá"/>
            <Colunas title="Done" conteudo="Olá"/>

            

        </div>
        </>
    )
}