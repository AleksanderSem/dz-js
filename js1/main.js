// Calc
function getGasPayment() {
      let gasPrice = +prompt("Введите цену на газ, (грн):", ""); // Цена на газ
      let gasUsed = +prompt("Использовано куб. метров за месяц, (м3):", ""); // Ко-во использованных кубометров газа
      let gasDeliveryPrice = +prompt("Введите цену за доставку газа, (грн):", ""); // цена за доставку газа
   
      let gasPayment = gasPrice * gasUsed + gasDeliveryPrice; // Общая стоимость за газ
      alert("Общая стоимость: " + gasPayment + " грн");
    }
    let btnGasCalc = document.getElementById("btn-gas-calc"); // получаем ссылку на кнопку для рассчетов
    btnGasCalc.addEventListener('click', getGasPayment);
   
   
    // Задание на синий пояс
    var credentials = {
      login: 'admin',
      password: 'qwerty',
    };
   
    let form = document.getElementById("form"); // получаем ссылку на форму
    let loginBtn = form.querySelector("#btn-login"); // получаем ссылку на кнопку Login, для проверки данных
   
    function user() {
      let login = form.login;
      let password = form.password;
      let messageBlock = document.querySelector(".message-block");
   
      if (credentials.login == login.value && credentials.password == password.value) {
        messageBlock.textContent = "Логин и пароль верны";
        messageBlock.style.background = "green";
      } else {
        messageBlock.textContent = "Ошибка!!! Логин и пароль не верны";
        messageBlock.style.background = "red";
      }
    }
   
    loginBtn.addEventListener('click', user);