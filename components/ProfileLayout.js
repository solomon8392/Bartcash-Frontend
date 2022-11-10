import {BsChat} from "react-icons/bs"

export default function Home({children}) {
    return (
        <div className="grid grid-cols-[80px_1fr]">
            <div className={`bg-primary text-white flex items-center flex-col gap-y-2 p-6 h-[100vh] overflow-y-auto`}>
                <div><BsChat /></div>
                <div>Icon</div>
            </div>
            <div className="p-6 overflow-y-auto h-[82vh]">
            {children}
            </div>
            
        </div>
    );
}