let buttonDOM = document.getElementById("liveToastBtn");
buttonDOM.addEventListener("click", newElement());

let removeDOM = document.querySelector("#closeClick");

function removeItem(el) {
  var el = el;
  console.log(el.textContent)
  el.remove();
 // localStorage.removeItem
}

function newElement() {
    
var itemsArray = localStorage.getItem("items")
? JSON.parse(localStorage.getItem("items"))
: [];

const data = JSON.parse(localStorage.getItem("items"));
  var ul = document.getElementById("list");

  let task = document.getElementById("task");
  if (!(task.value == "")) {
    let li = document.createElement("LI");
    /* <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button> */
    const closeButton =
      '<button type="button" onClick="removeItem(this.parentElement)" id="closeClick" style="margin-top: 12.5px" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>';
    li.innerHTML = closeButton;
    li.append(document.createTextNode(task.value));
    ul.append(li);

    itemsArray.push(task.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    $(".success").toast("show");
    task.value = "";
  } else {
    $(".error").toast("show");
  }
}
