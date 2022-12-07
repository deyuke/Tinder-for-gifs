import { GifDiv } from "./gifdiv";
import loading from "./loading.gif";
import { LikedModal } from "./likedModal";
import { useState, useEffect } from "react";
import { InfoModal } from "./infoModal";

export function GifCard() {
    const [offset, setOffset] = useState(1);
    const [likedGifs, setLikedGifs] = useState([]);
    const [imgSrc, setImgSrc] = useState(loading);
    const [imgTitle, setImgTitle] = useState("loading...");
    const [imgUploader, setImgUploader] = useState("loading...");
    const [imgUrl, setImgUrl] = useState("loading...");

    const [likedModalState, setLikedModalState] = useState(false);
    const [infoModalState, setInfoModalState] = useState(false);



    useEffect(() => {
        fetch(
            "https://api.giphy.com/v1/gifs/trending?api_key=rI2AfGE9AO3zMAyMiVgrgF26EJp3vrrj&offset=" +
                offset
        )
            .then((res) => res.json())
            .then((results) => {
                let gif = results["data"][0].images.original.url;
                let gifTitle = results["data"][0].title;
                let gifUsername = results["data"][0].username;
                let giphyLink = results["data"][0].bitly_url;

                setImgSrc(gif);
                setImgTitle(gifTitle);
                setImgUploader(gifUsername);
                setImgUrl(giphyLink);
            });
    });

    const likedGifObject = {
        src: imgSrc,
        title: imgTitle,
        uploader: imgUploader,
        link: imgUrl,
        id: parseInt(offset),
    };

    return (
        <div className="bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-6 mb-4 h-2/3 mt-10">
            <div className="flex justify-evenly flex-col items-center h-full">
                <GifDiv imgSrc={imgSrc} openInfo={()=> setInfoModalState(true)}/>
                <div className="w-full h-1/3 flex justify-around items-center py-16">
                    <button
                        onClick={() => setOffset(offset + 1)}
                        className="rounded-full shadow-lg h-32 w-32 text-8xl text-red-500 flex justify-center items-center outline-1 outline outline-slate-50 hover:-translate-y-1 duration-150 transition ease-in-out"
                    >
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100px"
                            height="100px"
                            viewBox="0 0 100 100"
                            enableBackground="new 0 0 100 100"
                        >
                            <path
                                fill="currentColor"
                                d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
                                c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
                                c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
                                c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
                                c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
                                l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            setOffset(offset + 1);
                            setLikedGifs(likedGifs.concat(likedGifObject));
                        }}
                        id="like"
                        className="rounded-full shadow-lg h-32 w-32 flex justify-center items-center text-green-400 outline-1 outline outline-slate-50 hover:-translate-y-1 duration-150 transition ease-in-out"
                    >
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <button
                    className="w-full h-10 outline outline-1 outline-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-white transition"
                    onClick={() => setLikedModalState(true)}
                >
                    Check your liked GIFs
                </button>
            </div>
            {infoModalState ? <InfoModal imgSrc={imgSrc} imgTitle={imgTitle} imgUploader={imgUploader} imgUrl={imgUrl} infoClose={() => setInfoModalState()}/> : null}
            {likedModalState ? <LikedModal likedGifs={likedGifs} likedClose={() => setLikedModalState(false)}/> : null}
        </div>
    );
}
