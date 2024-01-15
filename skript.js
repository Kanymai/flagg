
let flag = document.getElementById("flag");
let sortt = document.getElementById("sortt");
let API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((data) => data.json())
  .then((data) => {
    function flagsProduct(el) {
      let h3 = document.createElement("h3");
      h3.classList.add("h3");
      let img = document.createElement("img");
      let fl = document.createElement("div");
      fl.classList.add("flags");
      img.classList.add("img");
      img.src = el.flags.png;
      h3.innerHTML = el.name.common;
      fl.append(img);
      fl.append(h3);
      flag.append(fl);
    }
    sortt.addEventListener("click", () => {
      flag.innerHTML = "";
      const res = sortt.value;
      const sort_data = data.slice().sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (res === "az") {
          return nameA.localeCompare(nameB);
        } else if (res === "za") {
          return nameB.localeCompare(nameA);
        }
      });
      sort_data.forEach((el) => {
        flagsProduct(el);
      });
    });
  });
