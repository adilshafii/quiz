const inputs = document.querySelector(".inputs");

const id_Input = document.querySelector("#id_Input");
const id_Sual = document.querySelector("#id_Sual");
const id_varA = document.querySelector("#id_varA");
const id_varB = document.querySelector("#id_varB");
const id_varC = document.querySelector("#id_varC");
const dogru_id = document.querySelector("#dogru_id");

const send_btn = document.querySelector(".send_btn");



send_btn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/Questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      // your expected POST request payload goes here
      id: id_Input.value,
      Sual: id_Sual.value,
      varA: id_varA.value,
      varB: id_varB.value,
      varC: id_varC.value,
      dogru: dogru_id.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // enter you logic when the fetch is successful
      console.log(data);
    })
    .catch((error) => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error);
    });
});
