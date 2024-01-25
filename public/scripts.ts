const input = document.getElementById("search") as HTMLInputElement | null;
const button = document.getElementById("searchButton");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api";

type Responses = {
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

if (button)
  button.onclick = () => {
    if (input && input.value === "") {
      alert("Type anything First");
      return;
    }
    fetch(
      `${ApiUrl}/?key=${Apikey}&q=${input?.value}&image_type=photo&pretty=true`
    ).then((data) => {
      data.json().then((e) => {});
    });
  };
const container = document.getElementById("container") as HTMLDivElement;
const newDiv = document.createElement("div");
const newImg = document.createElement("img");
newImg.src =
  "https://cdn.pixabay.com/photo/2023/12/30/17/39/kombucha-8478515_150.jpg";
newDiv.appendChild(newImg);
container.appendChild(newDiv);
document.body.appendChild(container);
