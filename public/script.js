const input = document.getElementById("search").innerText;
const button = document.getElementById("searchButton");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api/?key=";
const webFormatUrl = `${ApiUrl}${Apikey}&q=${"input"}&image_type=photo&pretty=true`;

button.onclick = () => {
  if (input.value === "") {
    alert("Type anything First");
    return;
  }
  fetch("webFormatUrl");
  console.log(webFormatUrl);
};
console.log(webFormatUrl);
