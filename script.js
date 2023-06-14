const bill = document.querySelector("#bill");
const discount = document.querySelector("#discountAmo");
const calculator = document.querySelector("#calculator");
const total = document.querySelector("#total");

calculator.addEventListener("click", () => {
  const billValue = bill.value;
  const discountvalue = discount.value;
  const valid = isvalid(discountvalue);
  if (valid) {
    const discountAmount = billValue - (billValue * discountvalue) / 100;
    console.log(discountAmount);
    total.innerHTML = `The total amount to pay is:${discountAmount}`;
  } else {
    alert("The provided discount is not correct");
  }
});
function isvalid(discount) {
  if (discount < 0 || discount > 100) {
    return false;
  } else {
   return true;
  }
}
