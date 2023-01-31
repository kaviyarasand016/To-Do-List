
window.addEventListener("load", () => {
  const newStore = JSON.parse(localStorage.getItem("item"));
  newStore.forEach(product => {
    createIteam(product.newItem, product.ischecked)

  });
})

const myForm = document.getElementById("add");
const input = document.getElementById("input");
const myList = document.getElementById("myList");



myForm.onclick = (data) => {
  data.preventDefault();

  createIteam(input.value)  
};

createIteam = (d, ischecked) => {
  // myList.insertAdjacentHTML("beforeend", myTemplate)
  let myTemplate = document.createElement('div')
  myTemplate.classList.add("kgf");

  // to create delete button
  let delBtn = document.createElement('button')
  delBtn.addEventListener('click', deleteItem);
  delBtn.id = "int-btn";
  delBtn.type = "button";
  delBtn.innerHTML = `<i class="fa fa-close"></i>`
  myTemplate.appendChild(delBtn)

  // to create input checkbox
  let checkbox = document.createElement('input')
  checkbox.addEventListener('change', click)
  checkbox.type = "checkbox";
  checkbox.checked = ischecked;
  checkbox.classList.add("myCheck");
  myTemplate.appendChild(checkbox)

  // to create lable
  let lable = document.createElement("label")
  lable.id = "strike"
  lable.innerText = d;
  myTemplate.appendChild(lable)

  // to add br tag
  myTemplate.appendChild(document.createElement('br'))

  myList.appendChild(myTemplate)

  if (input.value != "")
    localStorage.setItem("item", JSON.stringify(
      [...JSON.parse(localStorage.getItem("item") || "[]"),
      { newItem: input.value, ischecked: false },]));

  input.value = ""
  input.focus()
}

fetch

function deleteItem(x) {
  const popEle = x.currentTarget.parentElement;
  popEle.remove();
  const newStore = JSON.parse(localStorage.getItem("item"));

  const remove = newStore.filter(value => {

    return value.newItem != popEle.innerText.trim();
  })

  localStorage.setItem("item", JSON.stringify(remove));
}

function clearItem() {
  return localStorage.removeItem("item")

}

function click(y) {
  const newStore = JSON.parse(localStorage.getItem("item"))

  const check = newStore.map(val => {
    if (y.currentTarget.parentElement.innerText.trim() === val.newItem)
      return { ...val, ischecked: y.currentTarget.checked }
    else return val
  });

  localStorage.setItem("item", JSON.stringify(check))

}

