const topi = false;
const iftarscnz = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (topi) {
      console.log("promise reject");
      reject();
    } else {
      console.log("promise fulfilled");
      resolve();
    }
  }, 1000);
});

console.log(iftarscnz);
iftarscnz
  .then(() => {
    console.log("iftari hogai");
  })
  .catch(() => {
    console.log("topi hogai");
  });



/////////////

const pakistaniTeam = "learn";
const championsTrophy = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (pakistaniTeam === "win") {
      resolve("rizwan bhai said aj win tha");
    } else {
      reject("aaj learn hogaya");
    }
  }, 1000);
});

championsTrophy
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

////////////////
function shaadiScnz(bankBalance) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (bankBalance > 1000000) {
          resolve("shaadi Mubarak");
        } else {
          reject("istekhara ma naa aya haa.cast sa bhar nahi krta hum");
        }
      }, 1000);
    });
  }

  shaadiScnz(2500000)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

////////////
function resultKaDin(marksBataBhai){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(marksBataBhai>=50){
         resolve('Chal tu pass hai bach gya')
        }else{
            reject('Tu mera puttar fail hai,abba ko call hogi ab')
        }
      },1000)
    })
}
resultKaDin(51)
.then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err);

})
//////////
function livingOnTheEdge(experience){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(experience>=10){
                resolve('apki selection hogai hai ')
            }else{
                reject('chala shaba kato apki selection nhi hui hai ')
            }
        },1000)
    })

}
livingOnTheEdge(11).then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err);

})
////////
function mausamKeHalat(temperature) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         if(temperature>20){
            resolve('arey yar koi AC chala do yaar')
         }else{
            reject('bari thand hai boss')
         }
        }, 1000)
    })

}
mausamKeHalat(22).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})
/////////////////////////////
function khanaMangwalo(khanayMaiKiaHai){
    return new Promise((resolve, reject) => {
        if (khanayMaiKiaHai==="biryani") {
            resolve('ammi bhook lagi hai khana lado')
        } else {
            reject('mai bahir se mangwa lunga')
        }
    })
    
}
khanaMangwalo("biryani").then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})
//////////////
function loanDedo(abhiKiMaliyat) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (abhiKiMaliyat>=500){
               resolve('han bhai bolo kitne paise chaiye') 
            } else {
                reject('ye ghareeb iski......')
            }
        },1000)
    })
    
} 
loanDedo(400).then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})