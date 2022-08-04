`use stict`;

/////////////////
//////////
//////
///

//data
const account1 = {
  owner: `Hammad Abu Hamza`,
  movements: [200, 330, -880, 670, 200, 300, -400, -60, 5000],
  interesrate: 1.2, //%
  pin: 1111,
};

const account2 = {
  owner: `lubaba Majan`,
  movements: [550, 880, -90, -40, -200, 400, 220],
  interesRate: 1.4,
  pin: 2222,
};

const account3 = {
  owner: `Onais Abu Hasan`,
  movements: [100, 300, -200, 500, 800, -50, -60],
  interesRate: 1.2,
  pin: 3333,
};

const account4 = {
  owner: `Muhsin Abu Sahal`,
  movements: [430, 90, -80, 400, 30, -30, 900],
  interesRate: 1.7,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const amountMove = document.querySelector(`.detail`);
const raqamMove = document.querySelector(`.raqam`);
const loginBtn = document.querySelector(`.login`);
const userBtn = document.querySelector(`.user`);
const pinBtn = document.querySelector(`.PIN`);
const logBtn = document.querySelector(`.log-in`);
const conTainer = document.querySelector(`.all`);
const fiGureIn = document.querySelector(`.figure`);
const fiGureOut = document.querySelector(`.vvv`);
const userTra = document.querySelector(`.user-tra`);
const pintra = document.querySelector(`.pin-tra`);
const loginTra = document.querySelector(`.login-tra`);
const useraaconfirm = document.querySelector(`.confirm`);
const pinConfirm = document.querySelector(`.pinconfirm`);
const pincCloseBtn = document.querySelector(`.loginpin`);

/////event handler

const updateUI = function (acc) {
  displayMovements(acc.movements);
  bbDD(acc);
  outIN(acc);
};

let currenetAccount;
loginBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  currenetAccount = accounts.find((acc) => acc.User === userBtn.value);
  console.log(currenetAccount);

  if (currenetAccount?.pin === Number(pinBtn.value)) {
    logBtn.textContent = `welcome back, ${currenetAccount.owner}`;

    conTainer.style.opacity = 100;
    userBtn.value = pinBtn.value = ` `;
    pinBtn.blur();
    updateUI(currenetAccount);
  }
});
const outIN = function (acc) {
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  fiGureOut.textContent = `${out}`;

  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  fiGureIn.textContent = `${income}`;
};

//////transfer money,,,,,,,,,

loginTra.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(pintra.value);
  const receiverAcc = accounts.find((acc) => acc.User === userTra.value);
  console.log(amount);
  console.log(receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currenetAccount.balance >= amount &&
    receiverAcc?.User !== currenetAccount.User
  ) {
    currenetAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currenetAccount);
  }
});
const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdraw`;
    innerHTML=""
    const html = `
        <div class="ff">
        <div class="${type}">${i + 1}${type}</div>
       
        <div></div>
            <div class="paise">${mov}</div>
    </div>`;
    amountMove.insertAdjacentHTML(`afterbegin`, html);
  });
};

const bbDD = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  raqamMove.textContent = `${acc.balance}PKR`;
};

//const acount = accounts.find(acc => acc.owner === `sahal`)
//console.log(acount)

const creatUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.User = acc.owner
      .toLowerCase()
      .split(` `)
      .map(function (name) {
        return name[0];
      })
      .join(``);
  });
};
creatUsername(accounts);
console.log(accounts);
