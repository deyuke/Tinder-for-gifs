
export function GifDiv(props) {
    const { imgSrc } = props;
    
        
    return (
        <img
            onClick={props.openInfo}
            id="gif"
            src={imgSrc}
            alt="gif"
            className="min-h-[200px] max-h-[350px] cursor-pointer rounded-2xl hover:-translate-y-1 duration-150 transition ease-in-out hover:shadow-md"
        />
    );
}
