//* task 1
const studentArr = [{
      name: 'Сергей',
      surname: 'Войлов',
      ratingPoint: 1000,
      schoolPoint: 1000,
      course: 2,
    },
    {
      name: 'Татьяна',
      surname: 'Коваленко',
      ratingPoint: 880,
      schoolPoint: 700,
      course: 1,
    },
    {
      name: 'Анна',
      surname: 'Кугир',
      ratingPoint: 1430,
      schoolPoint: 1200,
      course: 3,
    },
    {
      name: 'Станислав',
      surname: 'Щелоков',
      ratingPoint: 1130,
      schoolPoint: 1060,
      course: 2,
    },
    {
      name: 'Денис',
      surname: 'Хрущ',
      ratingPoint: 1000,
      schoolPoint: 990,
      course: 4,
    },
    {
      name: 'Татьяна',
      surname: 'Капустник',
      ratingPoint: 650,
      schoolPoint: 500,
      course: 3,
    },
    {
      name: 'Максим',
      surname: 'Меженский',
      ratingPoint: 990,
      schoolPoint: 1100,
      course: 1,
    },
    {
      name: 'Денис',
      surname: 'Марченко',
      ratingPoint: 570,
      schoolPoint: 1300,
      course: 4,
    },
    {
      name: 'Антон',
      surname: 'Завадский',
      ratingPoint: 1090,
      schoolPoint: 1010,
      course: 3
    },
    {
      name: 'Игорь',
      surname: 'Куштым',
      ratingPoint: 870,
      schoolPoint: 790,
      course: 1,
    },
    {
      name: 'Инна',
      surname: 'Скакунова',
      ratingPoint: 1560,
      schoolPoint: 200,
      course: 2,
    },
    ];
    
    class CreateStudent {
      constructor({ name, surname, ratingPoint, schoolPoint }, isSelfPayment) {
        this.id = CreateStudent.id++;
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = isSelfPayment;
      }
    
      static id = 1;
    }
    
    const setAllCreatedStudentsByConstructor = arrOfStudents => {
      let newStudentsArr = [];
    
      arrOfStudents.sort(function (a, b) {
        return b.ratingPoint - a.ratingPoint || b.schoolPoint - a.schoolPoint;
      });
    
      for (let i = 0; i < arrOfStudents.length; i++) {
        isSelfPayment = i < 5 && arrOfStudents[i].ratingPoint >= 800 ? false : true;
        const studentObj = new CreateStudent(arrOfStudents[i], isSelfPayment);
        newStudentsArr.push(studentObj);
      }
    
      return newStudentsArr;
    }
    
    const newStudentsArr = setAllCreatedStudentsByConstructor(studentArr);
    console.table(newStudentsArr);
    // =============================================================================================================
    
    
    // Additional tasks
    //* task 2
    class CustomString {
    
      // returns the reverse string
      reverse(str) {
        return str.split('').reverse().join('');
      }
    
      // returns the reverse string (without methods)
      reverseNotUsingMethods(str) {
        let reverseStr = '';
    
        for (let i = str.length - 1; i >= 0; i--) {
          reverseStr += str[i];
        }
    
        return reverseStr;
      }
    
      // returns a string with the first letter uppercase
      ucFirst(str) {
        if (!str) return str;
    
        return str[0].toUpperCase() + str.slice(1);
      }
    
      // returns a string with the first letter uppercase (without using methods)
      ucFirstNotUsingMethods(str) {
        if (!str) return str;
    
        let newStr = str[0].toUpperCase();
    
        for (let i = 1; i < str.length; i++) {
          newStr += str[i];
        }
    
        return newStr;
      }
    
      // returns a string whose first letter of each word is uppercase
      ucWords(str) {
        if (!str) return str;
        let strToArr = str.split(' ');
    
        for (let i = 0; i < strToArr.length; i++) {
          strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
        }
    
        return strToArr.join(' ');
      }
    
      // returns a string whose first letter of each word is uppercase (without using methods)
      ucWordsNotUsingMethods(str) {
        if (!str) return str;
        let newStr = str[0].toUpperCase();
    
        for (let i = 1; i < str.length; i++) {
          if (str[i] === ' ') {
            newStr += str[i] + str[i + 1].toUpperCase();
            i++;
          } else {
            newStr += str[i];
          }
        }
    
        return newStr;
      }
    }
    
    const myString = new CustomString();
    console.log(myString.reverse('qwerty'));
    console.log(myString.reverseNotUsingMethods('qwerty'));
    console.log(myString.ucFirst('qwerty'));
    console.log(myString.ucFirstNotUsingMethods('qwerty'));
    console.log(myString.ucWords('qwerty qwerty qwerty'));
    console.log(myString.ucWordsNotUsingMethods('qwerty qwerty qwerty'));
    // ==========================================================================================================
    
    //* task 3
    class Validator {
      checkIsEmail(email) {
        let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
        return email.match(regexp) ? true : false;
      }
    
      checkIsDomain(domain) {
        let regexp = /([\w-]+\.)+\w+/g;
        return domain.match(regexp) ? true : false;
      }
    
      checkIsDate(date) {
        let dateRegexp = /(?<day>[0-9]{2}).(?<month>[0-9]{2}).(?<year>[0-9]{4})/g;
        return date.match(dateRegexp) ? true : false;
      }
    
      checkIsPhone(phone) {
        let pattern = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
        return phone.match(pattern) ? true : false;
      }
    }
    
    var validator = new Validator();
    
    console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
    console.log(validator.checkIsDomain('google.com')); // true
    console.log(validator.checkIsDate('30.12.2012')); // true
    console.log(validator.checkIsPhone('+38 (066) 937-99-92')); // если код страны Украинский, то возвращаем true иначе false
    