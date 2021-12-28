
const inputEl = document.getElementById("input-el")
const save = document.getElementById("save-btn")
const del = document.getElementById("del-btn")
const list = document.getElementById("list-el")
let text = []

let textFromLocalStorage = JSON.parse(localStorage.getItem("text"))

if (textFromLocalStorage) {
  text = textFromLocalStorage
  render(text)
}

save.addEventListener("click", function () {
  text.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("text", JSON.stringify(text))
  render(text)

})

function render(text) {
  let checkBox = ""
  for (let i = 0; i < text.length; i++) {
    checkBox += `
    <div>
<label for="${text[i]}">${text[i]}</label>
<input type="checkbox" id="${text[i]}">
</div><br>`
    console.log(checkBox);
  }
  list.innerHTML = checkBox
}


del.addEventListener("click", function () {
  localStorage.clear()
  text = []
  render(text)
  alert('yakin?')
})

list.addEventListener("click", (item) => {

})