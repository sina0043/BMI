(function () {
  "use strict";

  let myHeight = document.querySelector("#height"),
    myWeight = document.querySelector("#weight"),
    computing = document.querySelector("button"),
    showResult = document.querySelector(".result"),
    mtTOcm,
    result;

  computing.addEventListener("click", comput);

  function comput() {
    if (myWeight.value == "" || myHeight.value == "") {
      alert("لطفا قد و وزن خود را وارد کنید")
    } else {
      mtTOcm = myHeight.value / 100;
      result = myWeight.value / (mtTOcm * mtTOcm);
      showResult.innerText = result.toPrecision(4);
    }
  }
})();
