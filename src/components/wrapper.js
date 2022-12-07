import { GifCard } from "./gifcard";

export function Wrapper() {
    return(
        <div className="w-full max-w-sm flex items-center justify-center h-full flex-col">
                <h1 className="text-6xl font-bold text-[#424242]">tinder</h1>
                <GifCard/>

        </div>
    ); 
}