const sec = document.querySelector("section");

const btn = document.querySelector("button");
const kecid = document.querySelector("a");
const questions = document.querySelector(".questions");
const score = document.querySelector(".score");

const arr = [];
const keys = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/Questions")
    .then((res) => res.json())
    .then((data) => {
      btn.style.display = "none";
      // enter you logic when the fetch is successful
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        arr.push(false);
        keys.push(data[i].dogru);
        const q_box = document.createElement("div");
        q_box.classList.add("q_box");
        questions.appendChild(q_box);

        const q_1 = document.createElement("h3");
        q_1.innerText = data[i].Sual;
        q_box.appendChild(q_1);

        const answer_1 = document.createElement("p");
        answer_1.innerText = data[i].varA;
        q_box.appendChild(answer_1);

        const answer_2 = document.createElement("p");
        answer_2.innerText = data[i].varB;
        q_box.appendChild(answer_2);

        const answer_3 = document.createElement("p");
        answer_3.innerText = data[i].varC;
        q_box.appendChild(answer_3);

        answer_1.addEventListener("click", function () {
          answer_1.classList.remove("selected");
          answer_2.classList.remove("selected");
          answer_3.classList.remove("selected");
          answer_1.classList.add("selected");
          arr[i] = "A";
        });
        answer_2.addEventListener("click", function () {
          answer_1.classList.remove("selected");
          answer_2.classList.remove("selected");
          answer_3.classList.remove("selected");
          answer_2.classList.add("selected");
          arr[i] = "B";
        });
        answer_3.addEventListener("click", function () {
          answer_1.classList.remove("selected");
          answer_2.classList.remove("selected");
          answer_3.classList.remove("selected");
          answer_3.classList.add("selected");
          arr[i] = "C";
        });
      }
      const yoxla = document.createElement("button");
      yoxla.innerText = "Yoxla";
      sec.appendChild(yoxla);

      yoxla.addEventListener("click", function () {
        const netice = document.createElement("p");
        const netice2 = document.createElement("p");

        let counter = 0;
        let counter2=0;
        for (let i = 0; i < data.length; i++) {
          if (arr[i] === keys[i]) {
            counter++;
            // console.log("dogru");
            // netice.innerText=
            // netice.innerText = "Sehv cavablarin sayi: " + 3 - cntr;
          }
          else{
            counter2++;
          }
        }
        netice.innerText = "Dogru cavablarin sayi : " + counter;
        netice2.innerText ="Sehv cavablarin sayi: "+ counter2;

        sec.appendChild(netice);
        sec.appendChild(netice2);

      });
    })

    .catch((err) => console.log(err));
});

// STATIC YAZ JS da
