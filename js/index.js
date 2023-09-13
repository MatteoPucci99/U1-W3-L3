// DEFAULT DEL FORM

const formDefault = document.getElementById("form-list");
formDefault.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = document.getElementById("to-do");
  const taskObj = {
    name: taskInput.value,
  };

  const newContactCard = document.createElement("div");
  newContactCard.classList.add("contact-card");

  newContactCard.innerHTML = `
 
  <p>${taskObj.name}</p>

  <button onclick="deleteCard(event)">ELIMINA</button>
 `;

  const container = document.getElementById("to-do-list");
  container.appendChild(newContactCard);
  console.log(taskInput.value);
  taskInput.value = "";
});

const deleteCard = (e) => {
  const clickedButton = e.target;

  clickedButton.parentElement.remove();
};
