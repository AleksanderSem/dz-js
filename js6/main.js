const arrOfUsers = []
for (let i = 0; i < 50; i ++) {
    let fakeData = faker.helpers.createCard()
    arrOfUsers.push(fakeData)
}

/////////////////// Не тогаем то что выше!!! ?///////////////

//1
class Customer{
    constructor({name,username,email,adress,phone,website,company,posts,accountHistory }){
        this.id=Customer.id++;
        this.name=name;
        this.username=username;
        this.email=email;
        this.adress=adress;
        this.phone=phone;
        this.website=website;
        this.company=company;
        this.posts=posts;
        this.accountHistory=accountHistory;
    }
    static id=1;
}
const setAllCreatedUsers=arrOfUsers=>{
    let allCreatedUsers=[];
    for(let i=0;i<arrOfUsers.length;i++){
        const customer= new Customer(arrOfUsers[i]);
        allCreatedUsers.push(customer);
    }
    return allCreatedUsers;
}
const allCreatedUsers=setAllCreatedUsers(arrOfUsers);

console.log(allCreatedUsers);
//==========================================================
//2
const getAllNamesAndEmails=allCreatedUsers.map(customer=>({
    name:customer.name,
    email:customer.email,
}))
console.log(getAllNamesAndEmails);
//===========================================================
//3
const getAllCustomersWithComDomain=allCreatedUsers.filter(customer=>{
   if (customer.website.includes('.com'))
   return customer;
})
const getAllCustomersIdsWithComDomain=getAllCustomersWithComDomain.map(customer=>{
    return customer.id;
})
console.log(getAllCustomersIdsWithComDomain);
//=============================================================
//4
const getAllGmailCustomers=allCreatedUsers.filter(customer=>{
    if(customer.email.includes('gmail.com'))
    return customer;
})
const getAllIdGmailCustomers=getAllGmailCustomers.map(customer=>{
    return customer.id;
})
console.log(getAllIdGmailCustomers);
//==============================================================
//5
const sortByCompanyType1=allCreatedUsers.filter(customer=>{
   if(customer.company.name.includes('LLC'))
   return customer;
})
const getIdAllCompanyType1=sortByCompanyType1.map(customer=>{
    return customer.id;
})
    const sortByCompanyType2=allCreatedUsers.filter(customer=>{
        if(customer.company.name.includes('Group'))
        return customer;
    })
    const getIdAllCompanyType2=sortByCompanyType2.map(customer=>{
        return customer.id;
    })
    const sortByCompanyType3=allCreatedUsers.filter(customer=>{
        if(customer.company.name.includes('Inc'))
        return customer;
    })
    const getIdAllCompanyType3=sortByCompanyType3.map(customer=>{
        return customer.id;
    })
    const sortByCompanyType={LLC: getIdAllCompanyType1,Group:getIdAllCompanyType2,Inc:getIdAllCompanyType3}

console.log(sortByCompanyType);
//=========================================================================
//6
const sortByAcountHistory=(allCreatedUsers)=>{
    let newArr=[];
    for(let i=0;i<allCreatedUsers.length;i++){
        let arr=allCreatedUsers[i];
        newArr.push(arr)
    }

    newArr.sort(function(a,b) {
        let resultA=0;
        for(let i=0;i<a.accountHistory.length;i++){
            resultA+=Number(a.accountHistory[i].amount);
        }
        let resultB=0;
        for(let i=0;i<b.accountHistory.length;i++){
            resultB+=Number(b.accountHistory[i].amount)
        }
        return resultA-resultB;
    })
    return newArr;
}
    console.log(sortByAcountHistory(allCreatedUsers));
    //==========================================================
    //7
    const sortByAcountHistoryByParametr=(sort)=>{
        let newArr=[];
        for(let i=0;i<allCreatedUsers.length;i++){
            let arr=allCreatedUsers[i];
            newArr.push(arr)
        }
    
        newArr.sort(function(a,b) {
            let resultA=0;
            for(let i=0;i<a.accountHistory.length;i++){
                resultA+=Number(a.accountHistory[i].amount);
            }
            let resultB=0;
            for(let i=0;i<b.accountHistory.length;i++){
                resultB+=Number(b.accountHistory[i].amount)
            }
            if(sort==='asc'){
            return resultA-resultB;
            }
            return resultB-resultA;
        })
        return newArr;
    }
        console.log(sortByAcountHistoryByParametr('asc'));
        console.log(sortByAcountHistoryByParametr('desc'));

        //==========================================================


