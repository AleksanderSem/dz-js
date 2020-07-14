//1
class Condidate{
      constructor(obj){
          Object.assign(this,obj);
      }
      state(){
          return this.address.split(',')[2];
      }
  }
  const candidate=new Condidate(condidateArr[10]);
  console.log(candidate.state());
  
  
  //2
  const getCompanyNames=newCandidateArr=>{
    let newCompanyName=  newCandidateArr.map(item=>item.company);
    return newCompanyName.filter((item,index)=>newCompanyName.indexOf(item)===index)
  }
  console.log(getCompanyNames(condidateArr));
  
  //3
  const getUsersByYear=(newCandidateArr,year=2017)=>{
      let regYearId=[];
      newCandidateArr.map(item=>{
          let getYear=(new Date(item.registered).getFullYear());
          if(year===getYear) 
          regYearId.push(item._id);   
      })
      return regYearId;
  }
  console.log(getUsersByYear(condidateArr,2020));
 
  //4
  const getCondidatesByUnreadMsg=(arrOfObj,num)=>{
      return arrOfObj.filter(item=>+item.greeting.match(/\d+/)===num)
  }
  console.log(getCondidatesByUnreadMsg(condidateArr,10));
  
  //5
  const getCondidatesByGender=(arrOfObj,gender='male')=>{
      return arrOfObj.filter(item=>item.gender===gender);
  }
  console.log(getCondidatesByGender(condidateArr,'male'));
  