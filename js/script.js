{
  const amountElement = document.querySelector(".js-amount");
  const cashElement = document.querySelector(".js-cash");
  const formElement = document.querySelector(".js-form");
  const resultElement = document.querySelector(".js-result");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const cash = cashElement.value;
    const amount = amountElement.value;

    let result = amount / cash;

    resultElement.innerText = result.toFixed(2);
  });
}
