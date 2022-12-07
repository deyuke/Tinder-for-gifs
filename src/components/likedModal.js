import { useState } from "react";
import { LikedInfoModal } from "./likedInfoModal";

export function LikedModal(props) {
    const likedGifs = props.likedGifs;

    const [areThereLikedGifs] = useState(likedGifs.length >= 1);
    const [showLikedInfoModal, setShowLikedInfoModal] = useState(false);
    const [likedGifInfo, setLikedGifInfo] = useState(null);

    return (
        <div className="h-full w-full absolute top-0 left-0 justify-center items-center backdrop-brightness-50 flex px-[calc((100vw)_/_8)]">
            <div
                className="bg-white shadow-2xl rounded-2xl px-8 pt-2 pb-6 mb-4 
                max-h-[calc((100vh/4)*3)]
                overflow-auto"
            >
                <p
                    className="flex flex-row-reverse w-full text-2xl font-bold font-mono z-50 cursor-pointer"
                    onClick={props.likedClose}
                >
                    ]<span className="text-red-500">x</span>[
                </p>

                {areThereLikedGifs ? (
                    <div className="h-full grid gap-4 grid-cols-4 items-center">
                        {likedGifs.map((gif) => (
                            <div key={gif.id}>
                                <img
                                    id={gif.id}
                                    onClick={(e) => {
                                        setShowLikedInfoModal(true);
                                        setLikedGifInfo(gif.id - 1);
                                    }}
                                    key={gif.id}
                                    src={gif.src}
                                    alt={gif.title}
                                    className="
                                        bg-black 
                                        bg-opacity-10 
                                        text-8xl 
                                        rounded-2xl 
                                        object-cover 
                                        cursor-pointer 
                                        hover:object-scale-down 
                                        hover:-translate-y-1 
                                        duration-150 
                                        transition 
                                        ease-in-out 
                                        hover:shadow-md 
                                        h-48 
                                        w-96
                                    "
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-5xl text-center break text-gray-400 w-80 flex items-center h-full">
                        <p>You haven't liked any GIFs yet.</p>
                    </div>
                )}
                {showLikedInfoModal ? (
                    <LikedInfoModal
                        likedGifs={likedGifs}
                        likedGifId={likedGifInfo}
                        likeInfoClose={() => setShowLikedInfoModal(false)}
                    />
                ) : null}
            </div>
        </div>
    );
}
