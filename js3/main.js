/**
 ** Дополнительное задание
 ** Слепить все задания в один текст, таким образом что бы вначале происходил ввод названия задания, каждое задание при этом находится в отдельном case оператора switch. Например case "currency calc" для калькулятора обмена валют.
 */
let jobTitle = prompt("Введите название задания", "");

switch (jobTitle) {
  case "switch: sizes":
    let sizeUA = +prompt("Введите размер одежды в укр. системе", "");
    let sizeUSA;
    if (sizeUA) {
      switch (sizeUA) {
        case 40:
          sizeUSA = 6;
          break;
        case 42:
          sizeUSA = 8;
          break;
        case 44:
          sizeUSA = 10;
          break;
        case 46:
          sizeUSA = 12;
          break;
        case 48:
          sizeUSA = 14;
          break;
        case 50:
          sizeUSA = 16;
          break;
        case 52:
          sizeUSA = 18;
          break;
        case 54:
          sizeUSA = 20;
          break;
        default:
          sizeUSA = '"неизвестное значение"';
          break;
      }
      alert(`Размер ${sizeUA} в американской системе равен ${sizeUSA}`);
    } else {
      alert('До свидания!')
    }
    break;

  case "switch: if":
    var color = prompt("Введите цвет", "");
    if (color == "red") {
      document.write("<div style='background-color: red;'>красный</div>");
      document.write("<div style='background-color: black; color: white;'>черный</div>");
    } else if (color == "black") {
      document.write("<div style='background-color: black; color: white;'>черный</div>");
    } else if (color == "blue") {
      document.write("<div style='background-color: blue;'>синий</div>");
      document.write("<div style='background-color: green;'>зеленый</div>");
    } else if (color == "green") {
      document.write("<div style='background-color: green;'>зеленый</div>");
    } else {
      document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
    break;

  case "prompt: or":
    let now = new Date();
    let nowYear = now.getFullYear();
    let userAge = +prompt("Сколько Вам лет:", '');
    let message = userAge && "Ваш год рождения " + (nowYear - +userAge) || "Вы ничего не ввели!!!";
    alert(message);
    break;

  case "confirm: or this days":
    let shopping = confirm("шопинг?") && "класс" || "ты - бяка";
    alert(shopping);
    break;

  case "confirm: if this days":
    if (confirm("шопинг?")) {
      alert("класс");
    } else {
      alert("ты - бяка");
    }
    break;

  case "triple prompt":
    let surname = prompt("Фамилия", "");
    let name = prompt("Имя", "");
    let fathername = prompt("Отчество", "");
    alert(`ФИО - ${surname} ${name} ${fathername}`);
    break;

  case "default: or": {
    let surname = prompt("Фамилия", "") || "Иванов";
    let name = prompt("Имя", "") || "Иван";
    let fathername = prompt("Отчество", "") || "Иванович";
    alert(`ФИО - ${surname} ${name} ${fathername}`);
  }
  break;

case "default: if": {
  let surname = prompt("Фамилия", "");
  if (!surname) {
    surname = "Иванов";
  }
  let name = prompt("Имя", "");
  if (!name) {
    name = "Иван";
  }
  let fathername = prompt("Отчество", "");
  if (!fathername) {
    fathername = "Иванович";
  }
  alert(`ФИО - ${surname} ${name} ${fathername}`);
}
break;

case "login and password":
  const user = {
    login: "Admin",
    password: "qwerty"
  }

  let login = prompt("Введите логин", "");
  if (login === user.login) {
    let password = prompt("Введите пароль", "");
    if (password === user.password) {
      alert(`Вы успешно вошли как ${login}!`);
    } else {
      alert("Не верный пароль!");
    }
  } else {
    alert("Не верный логин!");
  }
  break;

case "currency calc":
case "currency calc: improved":
case "currency calc: two rates":
  /**
   ** currency calc 
   *! +
   ** currency calc: improved    
   *! +
   ** currency calc: two rates     
   */
  let currency = prompt("Введите валюту: usd, eur", "").toLowerCase();
  let currency2Uah;
  switch (currency) {
    case 'usd':
      currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? 27.973 : 28.669;
      currencyIcon = "$"
      break;
    case 'eur':
      currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? 30.331 : 31.512;
      currencyIcon = "€";
      break;
    default:
      alert('Неизвестная валюта');
      break;
  }
  if (currency2Uah) {
    let uahValue = +prompt("Введите сумму в грн.", "");
    let currencyValue;
    if (uahValue) {
      currencyValue = +(uahValue / currency2Uah).toFixed(3);
      alert(`${uahValue} ₴ = ${currencyValue} ${currencyIcon}`);
    } else {
      alert("Вы ничего не ввели");
    }
  }
  break;

case "currency calc: if": {
  let currency = prompt("Введите валюту: usd, eur", "").toLowerCase();
  let currency2Uah;
  if (currency === "usd") {
    currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? 27.973 : 28.669;
    currencyIcon = "$"
  } else if (currency === "eur") {
    currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? 30.331 : 31.512;
    currencyIcon = "€";
  } else {
    alert('Неизвестная валюта');
  }

  if (currency2Uah) {
    let uahValue = +prompt("Введите сумму в грн.", "");
    let currencyValue;
    if (uahValue) {
      currencyValue = +(uahValue / currency2Uah).toFixed(3);
      alert(`${uahValue} ₴ = ${currencyValue} ${currencyIcon}`);
    } else {
      alert("Вы ничего не ввели");
    }
  }
}
break;

case "scissors":
  const objPlay = {
    1: "камень",
    2: "ножницы",
    3: "бумага"
  }

  let userOption = prompt("Сделайте Ваш выбор (камень, ножницы, или бумага)", "");
  if (userOption) {
    userOption = userOption.toLowerCase();
    let randOption = objPlay[Math.floor(1 + Math.random() * 3)];
    alert(randOption);
    if ((userOption === "камень" && randOption === "ножницы") || (userOption === "ножницы" && randOption === "бумага") || (userOption === "бумага" && randOption === "камень")) {
      alert("Вы победили");
    } else if (userOption === randOption) {
      alert("Ничья");
    } else {
      alert("Вы проиграли");
    }
  } else {
    alert("Вы ничего не ввели!")
  }
  break;

case "Задание на синий пояс": {
  const ratios = {
    usd: {
      buy: 27.973,
      sale: 28.669
    },
    eur: {
      buy: 30.331,
      sale: 31.512
    }
  }
  let currency = prompt("Введите валюту: usd, eur", "").toLowerCase();
  let currency2Uah;
  if (currency === "usd") {
    currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? ratios["usd"]["buy"] : ratios["usd"]["sale"];
    currencyIcon = "$"
  } else if (currency === "eur") {
    currency2Uah = confirm("Покупка - ОК, Продажа - Отмена") ? ratios["eur"]["buy"] : ratios["eur"]["sale"];
    currencyIcon = "€";
  } else {
    alert('Неизвестная валюта');
  }

  if (currency2Uah) {
    let uahValue = +prompt("Введите сумму в грн.", "");
    let currencyValue;
    if (uahValue) {
      currencyValue = +(uahValue / currency2Uah).toFixed(3);
      alert(`${uahValue} ₴ = ${currencyValue} ${currencyIcon}`);
    } else {
      alert("Вы ничего не ввели");
    }
  }
}
break;

case "Задание на черный пояс": {
  const objPlay = {
    1: "камень",
    2: "ножницы",
    3: "бумага"
  };
  let userChoice, randChoice;
  (userChoice = prompt("Сделайте Ваш выбор (камень, ножницы, или бумага)", "")) && !alert(randChoice = objPlay[Math.floor(1 + Math.random() * 3)]) && (((userChoice === "камень" && randChoice === "ножницы") || (userChoice === "ножницы" && randChoice === "бумага") || (userChoice === "бумага" && randChoice === "камень")) && !alert("Вы победили") || (userChoice === randChoice) && !alert("Ничья") || !alert("Вы проиграли")) || alert("Вы ничего не ввели!");
}
break;

default:
  alert("Неверное название задания");
  break;
}