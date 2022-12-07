export function InfoModal(props) {
    return (
        <div className="h-full w-full absolute justify-center items-center backdrop-brightness-50 flex top-0 left-0">
            <div className="bg-white shadow-2xl rounded-2xl px-8 py-8 mb-4 h-2/3 flex flex-col items-center justify-between">
                <p
                    className="flex flex-row-reverse w-full text-2xl font-bold font-mono z-50 cursor-pointer"
                    onClick={props.infoClose}
                >
                    ]<span className="text-red-500">x</span>[
                </p>
                <img
                    src={props.imgSrc}
                    alt={props.imgTitle}
                    className="min-h-[150px] max-h-[250px] rounded-2xl shadow-md"
                />
                <div className="text-xl flex flex-col">
                    <p>Title: </p>
                    <span className="font-bold text-2xl">{props.imgTitle}</span>
                    <br />
                    <p>Uploaded by: </p>
                    <span className="font-bold text-2xl">{props.imgUploader}</span>
                    <br />
                    <br />
                    <a
                        href={props.imgUrl}
                        target="_blank"
                        className="w-48 font-bold h-10 outline outline-6 flex justify-center items-center outline-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-white transition self-center"
                    >
                        Visit on GIPHY{" "}
                        <i className="bi bi-box-arrow-up-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
