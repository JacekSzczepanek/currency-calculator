{
  let amountElement = document.querySelector(".js-amount");
  let cashElement = document.querySelector(".js-cash");
  let formElement = document.querySelector(".js-form");
  let resultElement = document.querySelector(".js-result");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let cash = cashElement.value;
    let amount = amountElement.value;

    let result = amount / cash;

    resultElement.innerText = result.toFixed(2);
  });
}
