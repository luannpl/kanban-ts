import Content from "./Content"


export default function Container(){
    return(
        <>
        <div className="no-scrollbar overflow-x-auto h-screen">
        <Content/>
        </div>
        </>
    )
}