import "./styles.css";
// document.getElementById("app").innerHTML = `
// `;
const onClickAdd = () => {
  //alert();
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);
  let div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);
  let li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);
  div.appendChild(li);
  //console.log(div);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
