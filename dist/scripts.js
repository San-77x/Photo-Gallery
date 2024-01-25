"use strict";
const input = document.getElementById("search");
const button = document.getElementById("searchButton");
const Apikey = "42008578-85a7f1a17bdb7be2e2f29df16";
const ApiUrl = "https://pixabay.com/api";
if (button)
    button.onclick = () => {
        if (input && input.value === "") {
            alert("Type anything First");
            return;
        }
        fetch(`${ApiUrl}/?key=${Apikey}&q=${input === null || input === void 0 ? void 0 : input.value}&image_type=photo&pretty=true`).then((data) => {
            data.json().then((e) => {
                console.log(e);
            });
        });
    };
//# sourceMappingURL=scripts.js.map