let Form = document.getElementById("form");
let Password = document.getElementById("password");
let Email = document.getElementById("email");
let Message = document.querySelectorAll(".box p");
let Icons = document.querySelectorAll(".box p span");

let ValidEmail = /\w@\w.\w{2,9}/gi;
let ValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,}/gi;
let LowerCase = /[a-z]/g;
let Capital = /[A-Z]/g;
let Num = /[0-9]/g;

Password.oninput = function () {
  if (Password.value.match(LowerCase)) {
    Message[0].classList.add("green");
    Icons[0].innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    Message[0].classList.remove("green");
    Icons[0].innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
  if (Password.value.match(Capital)) {
    Message[1].classList.add("green");
    Icons[1].innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    Message[1].classList.remove("green");
    Icons[1].innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
  if (Password.value.match(Num)) {
    Message[2].classList.add("green");
    Icons[2].innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    Message[2].classList.remove("green");
    Icons[2].innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
  if (Password.value.length >= 8) {
    Message[3].classList.add("green");
    Icons[3].innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    Message[3].classList.remove("green");
    Icons[3].innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

Form.onsubmit = function () {
  let EmailValidationResult = ValidEmail.test(Email.value);
  let PasswordValidationResult = ValidPassword.test(Password.value);
  if (
    (EmailValidationResult === false) |
    (PasswordValidationResult === false)
  ) {
    return false;
  }
  return true;
};
