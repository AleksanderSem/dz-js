// 1. Создать функцию которая в console.log выведет значение count и переменная count будет равна 5.
const mult = (count) => {
      return new Promise((resolve) => {
        setTimeout(() => { resolve(count *= 2) }, 3000);
      })
    }
    
    const sum = (result) => {
      return new Promise((resolve) => {
        setTimeout(() => { resolve(result += 1) }, 2000);
      })
    }
    
    mult(2).then(res => {
      sum(res).then(result => console.log('Count (then): ' + result))
    })
    
    // 1. Second version (async/await)
    const count = async (count) => {
    
      const mult = new Promise((resolve) => {
        setTimeout(() => resolve(count *= 2), 3000);
      })
      let resultMult = await mult;
    
      const sum = new Promise((resolve) => {
        setTimeout(() => resolve(resultMult += 1), 2000);
      })
    
      let result = await sum;
    
      console.log('Count (async/await): ' + result);
    }
    
    count(2);