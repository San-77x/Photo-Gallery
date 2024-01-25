const input = document.getElementById("search") as HTMLInputElement | null;
const button = document.getElementById("searchButton");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api/?key";
const webFormatUrl = ApiUrl + Apikey + "&q=" + input + "&image_type=photo";

if (button)
  button.onclick = () => {
    if (input && input.value === "") {
      alert("Type anything First");
      return;
    }
    fetch("webFormatUrl");
  };
