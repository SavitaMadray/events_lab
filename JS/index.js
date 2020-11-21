document.addEventListener("DOMContentLoaded", () => {
  handleFormOne();
  handleFormTwo();
});

const handleFormOne = () => {
  let list1 = document.getElementById("list1");
  let input = document.getElementById("text");
  let simpleform = document.querySelector("#simpleForm");

  simpleform.addEventListener("submit", (event) => {
    event.preventDefault();
    let p = document.querySelector("p");
    let inputVal = input.value;
    if (inputVal === "") {
      p.innerText = "Enter a ToDo";
    } else {
      p.innerText = "";
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = "Delete";
      listItem.innerText = inputVal + " ";
      list1.appendChild(listItem);
      listItem.appendChild(button);
      input.value = "";
      listItem.addEventListener("click", () => {
        if (listItem.style.textDecoration === "none") {
          listItem.style.textDecoration = "line-through";
        } else {
          listItem.style.textDecoration = "none";
        }
      });
      button.addEventListener("click", () => {
        list1.removeChild(listItem);
      });
    }
  });
};

const handleFormTwo = () => {
  let list2 = document.getElementById("list2");
  let advancedForm = document.querySelector("#advancedForm");
  let textArea = document.querySelector("#textArea");

  advancedForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let p = document.querySelector("p");
    let textAreaVal = textArea.value;
    if (textAreaVal === "") {
      p.innerText = "Enter a ToDo";
    } else {
      p.innerText = "";
      let toDos = textAreaVal.split("\n");
      console.log(toDos);
      for (let i = 0; i < toDos.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = toDos[i];
        list2.appendChild(listItem);
        textArea.value = "";
      }
    }
  });
};
