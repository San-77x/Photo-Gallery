const input = document.getElementById("search");
const button = document.getElementById("searchButton");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api/?key=";
const webFormatUrl = `${ApiUrl}${Apikey}&q=${input}&image_type=photo&pretty=true`;

button.onclick = () => {
  if (input.value === "") {
    alert("Type anything First");
    return;
  }
  fetch("webFormatUrl");
  //   const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  newImg.src =
    "https://cdn.pixabay.com/photo/2023/12/30/17/39/kombucha-8478515_150.jpg";

  newDiv.appendChild(newImg);
  container.appendChild(newDiv);
  document.body.appendChild(container);

  console.log(webFormatUrl);
};
