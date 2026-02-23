//common shared function

function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  console.log(inputNumber, inputValue);
  return inputNumber;
}

function getTextFieldById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionBYid(id) {
  document.getElementById("show_donation").classList.add("hidden");
  document.getElementById("show_history").classList.add("hidden");

  //show section by id
  document.getElementById(id).classList.remove("hidden");
}
