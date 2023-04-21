export const Feedback = () => {
  const form = document.querySelector("form");

  const validateInput = (input, invalidInputs) => {
    if (!input.value.trim()) {
      input.classList.add("invalid");
      invalidInputs.push(input);
      return false;
    }
    if (input.type === "email" && !/\S+@\S+\.\S+/.test(input.value)) {
      input.classList.add("invalid");
      invalidInputs.push(input);
      return false;
    }
    input.classList.remove("invalid");
    return true;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    const invalidInputs = [];

    validateInput(name, invalidInputs);
    validateInput(email, invalidInputs);
    validateInput(message, invalidInputs);

    if (invalidInputs.length === 0) {
      console.log({
        Имя: name.value,
        Email: email.value,
        Сообщение: message.value,
      });
    }
  });
};
