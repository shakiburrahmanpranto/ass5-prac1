//card section one start
document.getElementById("btn_donate1").addEventListener("click", function () {
  alert("donation done");

  const addDonation = getInputFieldById("input_donation1");

  let balance = getTextFieldById("donation_balance1");

  const newBalance = balance + addDonation;

  document.getElementById("donation_balance1").innerText = newBalance + "BDT";

  // console.log("add money w parame", addDonation);

  // deduct from main balance
  let mainBalance = document
    .getElementById("main_balance")
    .innerText.replace(/[^0-9.-]+/g, "");
  const mainBalanceNumber = parseFloat(mainBalance);

  if (mainBalance < addDonation) {
    alert("insufficient balance");
    return;
  }
  const updatedBalance = mainBalance - addDonation;

  document.getElementById("main_balance").innerText = updatedBalance + "BDT";
});
//card section one end

//card section two start
document.getElementById("btn_donate2").addEventListener("click", function () {
  alert("donation done");

  const addDonation = getInputFieldById("input_donation2");

  // console.log("add money w parame", addDonation);

  let balance = getTextFieldById("donation_balance2");

  const newBalance = balance + addDonation;
  document.getElementById("donation_balance2").innerText = newBalance + "BDT";

  let mainBalance = document
    .getElementById("main_balance")
    .innerText.replace(/[^0-9.-]+/g, "");
  const mainBalanceNumber = parseFloat(mainBalance);

  if (mainBalance < addDonation) {
    alert("insufficient balance");
    return;
  }
  const updatedBalance = mainBalance - addDonation;
  document.getElementById("main_balance").innerText = updatedBalance;
});
//card section two end

//card section three start
document.getElementById("btn_donate3").addEventListener("click", function () {
  alert("donation done");

  const addDonation = getInputFieldById("input_donation3");

  // console.log("add money w parame", addDonation);

  const balance = getTextFieldById("donation_balance3");

  const newBalance = balance + addDonation;
  document.getElementById("donation_balance3").innerText = newBalance + "BDT";

  let mainBalance = document
    .getElementById("main_balance")
    .innerText.replace(/[^0-9.-]+/g, "");
  const mainBalanceNumber = parseFloat(mainBalance);

  if (mainBalance < addDonation) {
    alert("insufficient balance");
    return;
  }
  const updatedBalance = mainBalance - addDonation;
  document.getElementById("main_balance").innerText = updatedBalance;
});
//card section three end
