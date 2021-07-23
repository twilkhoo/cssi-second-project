const spinFun = () => {
  console.log("SPIN IS PRESSED");
  let popupVal = document.getElementById('spinId');
  popupVal.classList.toggle('is-active');
}

const spinClose = () => {
  let popupVal = document.getElementById('spinId');
  popupVal.classList.toggle('is-active'); 
}

// Macaroni
const macFun = () => {
  console.log("MAC IS PRESSED");
  let popupVal = document.getElementById('macId');
  popupVal.classList.toggle('is-active');
}

const macClose = () => {
  let popupVal = document.getElementById('macId');
  popupVal.classList.toggle('is-active'); 
}

// Greek
const greekFun = () => {
  console.log("GREEK IS PRESSED");
  let popupVal = document.getElementById('greekId');
  popupVal.classList.toggle('is-active');
}

const greekClose = () => {
  let popupVal = document.getElementById('greekId');
  popupVal.classList.toggle('is-active'); 
}