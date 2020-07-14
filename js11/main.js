// 1 Создать функцию которая сохранит в глобальную переменную - массив всех пользователей из https://api-front.herokuapp.com/.
let requestUrl = 'https://api-front.herokuapp.com/users';

const getUsers = url => {
  return new Promise((reserve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onloadend = function () {
      if (Math.floor(xhr.status / 100) !== 2) {
        reject(`Error. Status code: ${xhr.status}`);
      }

      let userData = JSON.parse(xhr.response);
      reserve(userData);
    }

    xhr.onerror = () => {
      reject(`Error. Status code: ${xhr.status}`);
    }

    xhr.send();
  })
}

const showUsers = async (url) => {
  try {
    const users = await getUsers(url);
    console.log(users);
  } catch (e) {
    console.log(e)
  }
}

showUsers(requestUrl);


// 2. Создать функцию которая создаст нового пользователя. После как бек его вернет с новым id, пушим в раннее созданную переменную его.
const newUser = { name: 'User', email: 'user@user.ru', password: 'userTest1' };

const createUser = (url, obj) => {
  return new Promise((reserve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onloadend = function () {
      if (Math.floor(xhr.status / 100) !== 2) {
        reject(`Error. Status code: ${xhr.status}`);
      }

      const userData = JSON.parse(xhr.response);
      reserve(userData)
    }

    xhr.onerror = () => {
      reject(`Error. Status code: ${xhr.status}`);
    }

    xhr.send(JSON.stringify(obj));
  })
}

const addUser = async (url, obj) => {
  try {
    const result = await createUser(url, obj)
  } catch (e) {
    console.log(e);
  }
}

// addUser(requestUrl, newUser);


// 3. Создать функцию которая выводит в консоль пользователя по id.
const getUserById = (url, id) => {
  return new Promise((reserve, reject) => {

    if (typeof id === 'string') {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url + '/' + id);

      xhr.onloadend = function () {
        if (Math.floor(xhr.status / 100) !== 2) {
          reject(`Error. Status code: ${xhr.status}`);
        }

        const userData = JSON.parse(xhr.response);
        if (userData !== null) {
          reserve(userData)
        } else {
          alert("User with this id not found");
        }
      }

      xhr.onerror = () => {
        reject(`Error. Status code: ${xhr.status}`);
      }

      xhr.send();
    } else {
      alert("Enter id");
    }
  })
}

const showUserById = async (url, id) => {
  try {
    const user = await getUserById(url, id)
    console.log(user);
  } catch (e) {
    console.log(e)
  }
}

showUserById(requestUrl, '5f04505fe4c3230017ac98a1');


// 4. Создать функцию которая удаляет пользователя по id. После когда удаление прошло, удалем этого пользователя из нашего локального массива. (DELETE with path-params)
const delUserById = (url, id) => {
  return new Promise((reserve, reject) => {

    if (typeof id === 'string') {
      const xhr = new XMLHttpRequest();

      xhr.open('DELETE', url + '/' + id);

      xhr.onloadend = function () {
        if (Math.floor(xhr.status / 100) !== 2) {
          reject(`Error. Status code: ${xhr.status}`);
        }

        const userData = JSON.parse(xhr.response);
        if (userData !== null) {
          reserve(userData)
        } else {
          alert("User with this id not found");
        }
      }

      xhr.onerror = () => {
        reject(`Error. Status code: ${xhr.status}`);
      }

      xhr.send();
    } else {
      alert("Enter id");
    }
  })
}

const dropUserById = async (url, id) => {
  try {
    const user = await delUserById(url, id)
  } catch (e) {
    console.log(e)
  }
}

// dropUserById(requestUrl, '5f04505fe4c3230017ac98a1');

// 5. Создать функцию которая обновляет пользователя по id. После когда обновление прошло, обновляем этого пользователя в нашем локальном массиве.
const updateUser = { name: "User1", email: "ser1@user1.ru", password: "user1Test1" };

const updateUserById = (url, id, obj) => {
  return new Promise((reserve, reject) => {

    if (typeof id === 'string') {
      const xhr = new XMLHttpRequest();

      xhr.open('PATCH', url + '/' + id);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onloadend = function () {
        if (Math.floor(xhr.status / 100) !== 2) {
          reject(`Error. Status code: ${xhr.status}`);
        }

        const userData = JSON.parse(xhr.response);
        if (userData !== null) {
          reserve(userData)
        } else {
          alert("User with this id not found");
        }
      }

      xhr.onerror = () => {
        console.log(`Error. Status code: ${xhr.status}`);
      }

      xhr.send(JSON.stringify(obj));
    } else {
      alert("Enter id");
    }
  })
}

const upgradeUserById = async (url, id, obj) => {
  try {
    const user = await updateUserById(url, id, obj)
  } catch (e) {
    console.log(e)
  }
}

// upgradeUserById(requestUrl, "5f045f821d12dc00179d49d0", updateUser);