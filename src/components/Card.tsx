import User from "./User";

export default function Card(){
    return(
        <>
            <div className="bg-slate-800 text-slate-100 rounded-md p-2 flex space-x-0.5 cursor-pointer">
                <div className="flex-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                </div>
                <User/>
                
                
                
            </div>
        </>
    )
}