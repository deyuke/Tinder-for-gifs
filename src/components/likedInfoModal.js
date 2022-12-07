export function LikedInfoModal(props) {
    const gif = props.likedGifs[props.likedGifId];
    return (
        <div
            className="absolute z-50 h-full w-full top-0 left-0 flex justify-center items-center backdrop-brightness-50"
        >
            <div className="bg-white shadow-2xl rounded-2xl p-8 b-4 h-2/3 min-w-[40px] max-w-[calc((100vw/9)*3)] flex flex-col items-center justify-between">
                <p
                    className="flex flex-row-reverse w-full text-2xl font-bold font-mono z-50 cursor-pointer"
                    onClick={props.likeInfoClose}
                >
                    ]<span className="text-red-500">x</span>[
                </p>
                <div>
                    <img
                        src={gif.src}
                        alt={gif.title + " by " + gif.uploader}
                        className="min-h-[150px] max-h-[250px] rounded-2xl shadow-md"
                    />
                </div>

                <div className="text-xl flex flex-col mb-8">
                    <p>Title: </p>
                    <span className="font-bold text-2xl">
                        {gif.title}
                    </span>
                    <br />
                    <p>Uploaded by: </p>
                    <span className="font-bold text-2xl">
                        {gif.uploader}
                        </span>
                    <br />
                    <br />
                    <a
                        href={gif.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-48 font-bold h-10 outline outline-6 flex justify-center items-center outline-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-white transition self-center"
                    >
                        Visit on GIPHY <i className="bi bi-box-arrow-up-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
