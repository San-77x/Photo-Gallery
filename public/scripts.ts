const input = document.getElementById("search") as HTMLInputElement | null;
const button = document.getElementById("searchButton");
const imageContainer = document.getElementById("container");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api";

type ImageItem = {
  id: number;
  pageURL: string;
  type: string;
  tag: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

type ResponsesType = {
  total: number;
  totalHits: number;
  hits: ImageItem[];
};

let currentPage = 1;
let searchValue = "";

const loadImage = () => {
  if (input && input.value === "") {
    alert("Type anything First");
    return;
  }
  if (searchValue !== input?.value) {
    if (imageContainer) imageContainer.innerHTML = "";
    searchValue = input?.value || searchValue;
  }
  const existingButton = document.getElementById("loadMore");
  if (existingButton) {
    existingButton.textContent = "Loading...";
  }

  fetch(
    `${ApiUrl}/?key=${Apikey}&q=${input?.value}&image_type=photo&pretty=true&page=${currentPage}`
  )
    .then((abu) => {
      abu.json().then((e: ResponsesType) => {
        e.hits.forEach((elm) => {
          console.log(elm);
          const newDiv = document.createElement("div");
          const newImg = document.createElement("img");
          newImg.src = elm.previewURL;
          newImg.className =
            "rounded-md overflow-hidden object-cover w-44 h-44";
          newDiv.appendChild(newImg);
          newDiv.className = "w-44 h-44 rounded-lg border overflow-hidden";
          imageContainer?.appendChild(newDiv);
        });

        currentPage++;
        if (existingButton) existingButton.remove();
        const loadMoreButton = document.createElement("button");
        loadMoreButton.id = "loadMore";
        loadMoreButton.textContent = "Load more";
        loadMoreButton.className =
          "w-44 h-44 bg-gray-200 flex items-center justify-center font-bold";
        if (!loadMoreButton) return;
        loadMoreButton.onclick = loadImage;
        imageContainer?.appendChild(loadMoreButton);
      });
    })
    .catch((er) => {
      console.log(er);
    });
};

if (button) button.onclick = loadImage;
