const emplyeeArr = [{
      id: 0,
      name: 'Денис',
      surname: 'Хрущ',
      salary: 1010,
      workExperience: 10, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
    {
      id: 1,
      name: 'Сергей',
      surname: 'Войлов',
      salary: 1200,
      workExperience: 12, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
    {
      id: 2,
      name: 'Татьяна',
      surname: 'Коваленко',
      salary: 480,
      workExperience: 3, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
    },
    {
      id: 3,
      name: 'Анна',
      surname: 'Кугир',
      salary: 2430,
      workExperience: 20, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'female'
    },
    {
      id: 4,
      name: 'Татьяна',
      surname: 'Капустник',
      salary: 3150,
      workExperience: 30, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
    },
    {
      id: 5,
      name: 'Станислав',
      surname: 'Щелоков',
      salary: 1730,
      workExperience: 15, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
    {
      id: 6,
      name: 'Денис',
      surname: 'Марченко',
      salary: 5730,
      workExperience: 45, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'male'
    },
    {
      id: 7,
      name: 'Максим',
      surname: 'Меженский',
      salary: 4190,
      workExperience: 39, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
    {
      id: 8,
      name: 'Антон',
      surname: 'Завадский',
      salary: 790,
      workExperience: 7, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
    {
      id: 9,
      name: 'Инна',
      surname: 'Скакунова',
      salary: 5260,
      workExperience: 49, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
    },
    {
      id: 10,
      name: 'Игорь',
      surname: 'Куштым',
      salary: 300,
      workExperience: 1, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
    },
  ];
  
  
  // 1. Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr в employees.js;
  const Employee = function (id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
  }
  
  const employeeObj = new Employee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
  console.table(employeeObj);
  
  
  // 2. Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
  Employee.prototype.getFullName = function () {
    return this.surname + ' ' + this.name;
  }
  
  console.log(employeeObj.getFullName());
  
  
  // 3. Создать новый массив emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
  let createEmployesFromArr = (arr) => {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      const employeeObj = new Employee(item.id, item.name, item.surname, item.salary, item.workExperience, item.isPrivileges, item.gender);
      newArr.push(employeeObj);
    }
  
    return newArr;
  }
  
  const employeeConstructArr = createEmployesFromArr(emplyeeArr);
  console.table(employeeConstructArr);
  
  
  // 4. Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;
  const getFullNamesFromArr = (arr) => {
    let fullNameArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      fullNameArr.push(arr[i].getFullName());
    }
  
    return fullNameArr;
  }
  
  console.table(getFullNamesFromArr(employeeConstructArr));
  
  
  // 5. Создать функцию которая вернет среднее значение зарплаты всех employee
  Employee.prototype.getSalary = function () {
    return this.salary;
  }
  
  const getMiddleSalary = (arr) => {
    let sumSalary = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sumSalary += arr[i].getSalary();
    }
  
    return sumSalary / arr.length;
  }
  
  console.log(getMiddleSalary(employeeConstructArr));
  
  
  // 6. Создать функцию которая выберет рандомного работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random;
  const getRandomNumber = (maxRandom) => {
    const randomNumber = Math.floor(Math.random() * (maxRandom + 1));
    if (randomNumber > maxRandom) {
      getRandomNumber(maxRandom);
    } else {
      return randomNumber;
    }
  }
  
  const getRandomEmployee = (arr) => {
    return arr[getRandomNumber(arr.length - 1)];
  }
  
  console.log(getRandomEmployee(employeeConstructArr));
  
  // Второй способ
  function getRandomEmployee2(arr) {
    let rand = Math.floor(Math.random() * ((arr.length - 1) + 1));
    return arr[rand];
  }
  
  console.log(getRandomEmployee2(employeeConstructArr));