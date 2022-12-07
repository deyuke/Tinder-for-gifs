var i = 1;
var o = 0;
var likeButton = document.getElementById("like");
var img = document.getElementById("gif");
var imgInfo = document.getElementById("infogif");
var infoModal = document.getElementById("infoModal");
var titleSpan = document.getElementById("titleSpan");
var userSpan = document.getElementById("userSpan");
var visitLink = document.getElementById("visitLink");
var likedModal = document.getElementById("likedModal");
var likedGrid = document.getElementById("likedGrid");
var noLikes = document.getElementById("noLikes");
var infoModalLiked = document.getElementById("infoModalLiked");
var container = document.getElementById("container");
var likedInfoGif = document.getElementById("likedInfoGif");
var likedTitleSpan = document.getElementById("likedTitleSpan");
var likedUserSpan = document.getElementById("likedUserSpan");
var visitLink2 = document.getElementById("visitLink2");

var likedGifs = [];
var likedGifArray = [];

function fetchGif() {
    fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=rI2AfGE9AO3zMAyMiVgrgF26EJp3vrrj&offset=" +
            i,
    )
        .then((res) => res.json())
        .then((results) => {
            var gif = results["data"][0].images.original.url;
            var gifTitle = results["data"][0].title;
            var gifUsername = results["data"][0].username;
            var giphyLink = results["data"][0].bitly_url;

            img.src = gif;
            imgInfo.src = gif;
            // console.log(i);

            titleSpan.innerText = gifTitle;
            userSpan.innerText = gifUsername;
            visitLink.href = giphyLink;
        });
}
fetchGif(i);

function dislike() {
    i++;
    fetchGif(i);
}

function like() {
    var likedGifObject = {
        src: img.currentSrc,
        title: titleSpan.innerHTML,
        uploader: userSpan.innerHTML,
        link: visitLink.href,
    };
    likedGifs.push(likedGifObject);
    console.log(likedGifs);

    i++;
    fetchGif(i);

    noLikes.classList.add("hidden");
}

function openInfo() {
    infoModal.classList.remove("hidden");
    infoModal.classList.add("flex");
}

function closeModal() {
    infoModal.classList.add("hidden");
    infoModal.classList.remove("flex");
}

function closeLikedModal() {
    infoModalLiked.classList.add("hidden");
    infoModalLiked.classList.remove("flex");
}

function closeLiked() {
    likedModal.classList.add("hidden");
    likedModal.classList.remove("flex");

    likedGrid.replaceChildren();
}
function openLiked() {
    likedModal.classList.remove("hidden");
    likedModal.classList.add("flex");
}

var likeArr = likedGifs;
// var mappedGifs = likeArr.map((gif) => {
//   "<img src='" +
//     gif +
//     "' alt='gif' class='text-8xl outline outline-4 outline-red-900 max-h-[90%] min-h-[50%]'></img>";
// });

function likedGifsGrid() {
    likeArr.forEach((gif) => {
        console.log(gif);
        var gifElement =
            "<div><img onclick='handler(event)' src='" +
            gif.src +
            "' alt='gif' class='text-8xl rounded-2xl object-cover cursor-pointer hover:object-scale-down " +
            "hover:-translate-y-1 duration-150 transition ease-in-out hover:shadow-md h-48 w-96'></img></div>";
        likedGifArray.push(gifElement);
    });

    var theGifs = new Set(likedGifArray);
    console.log(theGifs);

    theGifs.forEach((gif2) => likedGrid.insertAdjacentHTML("beforeend", gif2));
}

function handler(event) {
    // console.dir(event.target.currentSrc);
    console.dir(event.target);
    likedInfoGif.innerHTML =
        "<img id='likedInfogif' src='" +
        event.target.currentSrc +
        "' alt='tinder for gifs' class='min-h-[150px] max-h-[250px] rounded-2xl shadow-md'>";
    infoModalLiked.classList.remove("hidden");
    infoModalLiked.classList.add("flex");

    var imageSrc = event.target.currentSrc;
    for (var g = 0; g < likedGifs.length; g++) {
        if (likedGifs[g].src == imageSrc) {
            likedTitleSpan.innerHTML = likedGifs[g].title;
            likedUserSpan.innerHTML = likedGifs[g].uploader;
            visitLink2.href = likedGifs[g].link;
        }
    }
}
