//Define UI Variables

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-tasks");
//console.log(form, taskInput, taskList, clearbtn);
//LOAD ALL EVENT LISTENERS:
function loadEventlisterners() {
  //Add task Event
  form.addEventListener("submit", addTask);
  //Add a clear event
  clearbtn.addEventListener("click", clearTasks);
}
function addTask(event) {
  event.preventDefault();

  if (taskInput.value === "") {
    alert("Fill the field");
  } else {
    //create a li element
    const li = document.createElement("li");
    //Add class name
    li.className = "collection-item";

    //Create text node
    li.appendChild(document.createTextNode(taskInput.value));

    //Create a link
    const link = document.createElement("a");

    //Add class to link
    link.className = "delete-item secondary-content";

    //Add icon

    link.innerHTML =
      `<i class 'fa fa-remove"></li` >
      //Append link to li
      li.appendChild(link);

    //Append link to li
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function clearTasks() {
  //console.log(taskList.innerHTML);
  taskList.innerHTML = "";
}

loadEventlisterners();

/* <li class="collection-item">
                List Item 1
                <a href="#" class="delete-item secondary-content test" title="im Link">
                  <i class="fa fa-remove"></i>
                </a>
              </li> */
