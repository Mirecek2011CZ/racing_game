const button = document.getElementById("button");
const win = document.getElementById("win");
const backBtnr = document.getElementById("backBtnr");
const left = document.getElementById("left");
const item = document.getElementsByClassName("item");
const upgrade = document.getElementsByClassName("upgrade");
const img1 = document.getElementById("car1");
const img2 = document.getElementById("car2");
const moneyCounter = document.getElementById("moneyCounter");
const lose = document.getElementById("lose");

let money = 10;
let movementSpeed = 15;
let movementSpeed2 = 3;
let winMoney = 10;
let check = false;

let price1 = 10;
let price2 = 15;
let price3 = 20;
let price4 = 25;
let price5 = 30;
let price6 = 35;

window.onload = () => {
  check = localStorage.getItem("check");
  if (check == null) {
    localStorage.setItem("price1", price1);
    localStorage.setItem("price2", price2);
    localStorage.setItem("price3", price3);
    localStorage.setItem("price4", price4);
    localStorage.setItem("price5", price5);
    localStorage.setItem("price6", price6);
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("winMoney", winMoney);
    localStorage.setItem("money", money);
    localStorage.setItem("movementSpeed2", movementSpeed2);
    check = true;
    localStorage.setItem("check", check);
  } else {
    price1 = parseInt(localStorage.getItem("price1"));
    price2 = parseInt(localStorage.getItem("price2"));
    price3 = parseInt(localStorage.getItem("price3"));
    price4 = parseInt(localStorage.getItem("price4"));
    price5 = parseInt(localStorage.getItem("price5"));
    price6 = parseInt(localStorage.getItem("price6"));
    movementSpeed = parseInt(localStorage.getItem("movementSpeed"));
    winMoney = parseInt(localStorage.getItem("winMoney"));
    movementSpeed2 = parseInt(localStorage.getItem("movementSpeed2", movementSpeed2));
    item[0].innerHTML = price1;
    item[1].innerHTML = price2;
    item[2].innerHTML = price3;
    item[3].innerHTML = price4;
    item[4].innerHTML = price5;
    item[5].innerHTML = price6;
  }
  if (parseInt(localStorage.getItem("money")) != null && parseInt(localStorage.getItem("money")) != "") {
    money = parseInt(localStorage.getItem("money"));
    moneyCounter.innerHTML = money;
  }
  setInterval(() =>{
    if(parseInt(img1.style.left) >= 1680){
      clearInterval(interval);
      backBtnr.style.display = "none";
      left.style.display = "none";
      lose.style.display = "block"
      localStorage.setItem("movementSpeed", movementSpeed);
      localStorage.setItem("winMoney", winMoney);
      localStorage.setItem("money", money);
      localStorage.setItem("movementSpeed2", movementSpeed2);
    }
  }, 1)
};

const interval = setInterval(() => {
  img1.style.left = `${img1.offsetLeft + movementSpeed2}px`;
}, 40);

function moveleft() {
  img2.style.left = `${img2.offsetLeft + movementSpeed}px`;
  console.log(parseInt(img2.style.left))
  if (parseInt(img2.style.left) >= 1680) {
    win.style.display = "block";
    clearInterval(interval);
    backBtnr.style.display = "none";
    left.style.display = "none";
    money += winMoney;
    winMoney *= 1.5;
    movementSpeed2 += 1.2;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("winMoney", winMoney);
    localStorage.setItem("money", money);
    localStorage.setItem("movementSpeed2", movementSpeed2);
  }
}

upgrade[0].onclick = () => {
  if (money >= price1) {
    money -= price1;
    price1 *= 2;
    item[0].innerHTML = price1;
    movementSpeed += 5;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price1", price1);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money;
  }
};

upgrade[1].onclick = () => {
  if (money >= price2) {
    money -= price1;
    price2 *= 2;
    item[1].innerHTML = price2;
    movementSpeed += 2;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price2", price2);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money;
  }
};

upgrade[2].onclick = () => {
  if (money >= price3) {
    money -= price3;
    price3 *= 2;
    item[2].innerHTML = price3;
    movementSpeed += 3;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price3", price3);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money
  }
};

upgrade[3].onclick = () => {
  if (money >= price4) {
    money -= price4;
    price4 *= 2;
    item[3].innerHTML = price4;
    movementSpeed += 4;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price4", price4);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money
  }
};

upgrade[4].onclick = () => {
  if (money >= price5) {
    money -= price5;
    price5 *= 2;
    item[4].innerHTML = price5;
    movementSpeed += 5;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price5", price5);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money
  }
};

upgrade[5].onclick = () => {
  if (money >= price6) {
    money -= price6;
    price6 *= 2;
    item[5].innerHTML = price6;
    movementSpeed += 6;
    localStorage.setItem("movementSpeed", movementSpeed);
    localStorage.setItem("price6", price6);
    localStorage.setItem("money", money);
    moneyCounter.innerHTML = money
  }
};
