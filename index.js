const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
  input: document.querySelector(".input"),
};

let name = "";
let guesses = 0;
let number = Math.round(Math.random() * 100);

refs.form.addEventListener("submit", handleSubmit);

printMessage("Enter player name...");

refs.input.focus();

function handleSubmit(e) {
  e.preventDefault();

  proccessInput(refs.input.value);

  refs.input.value = "";
}

function printMessage(message) {
  let item = document.createElement("li");
  item.textContent = message;
  item.classList.add("item");
  refs.list.appendChild(item);
}

function proccessInput(input) {
  if (!input) {
    return;
  }

  if (!name) {
    name = input;
    deleteMessages();
    printMessage(
      `${name}, guessed number from 0 to 100. Try to guess for the least number of attempts. After each attempts, I will say a 'more', 'less' or 'true'. Please enter your integer number...`
    );
    return;
  }

  printMessage(input);

  let guess = Number(input);

  guesses += 1;

  if (guess > number) {
    printMessage("Less. Please try again.");
  } else if (guess < number) {
    printMessage("More. Please try again.");
  } else {
    printMessage("Congratulating! You're win!");
    printMessage(`Number of Attempts: ${guesses}`);
    printMessage("Game Over!");
    refs.form.remove();
  }
}

function deleteMessages() {
  refs.list.innerHTML = "";
}
