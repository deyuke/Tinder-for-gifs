import { Wrapper } from "./wrapper";

export function Container() {
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-rose-500 to-pink-500">
            <div className="h-full w-screen z-10 absolute">
                <div className="flex justify-center items-center h-full">
                    <Wrapper />
                </div>
            </div>
        </div>
    );
}
