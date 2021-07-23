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

const sizeVal = (size) => {
  console.log(size);
}

/*
Store 1 variable for size, 1 for friendliness, 1 for activity

When submit is pressed, find if variables exist in firebase (usings conditionals/ for loops)




*/