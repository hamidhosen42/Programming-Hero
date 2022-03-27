const fruits = [{ name: "pineapple" }, { name: "mango" }, { name: "papaya" }];
const election = [
  "razzak",
  "alomgir",
  "jayed",
  "jayed",
  "jayed",
  "nepun",
  "jayed",
];

const election2 = {
  razzak: 1,
  alomgir: 1,
  jashim: 1,
  jayed: 4,
};

let db={};

const addToDb=(item)=>{
  // three ways to add a property to an object
  // db.alam=1;
  // db["alam"]=1;
  // db[item]=1;
  
  const storageChecker=localStorage.getItem("name");

  if(storageChecker)
  {
      db = JSON.parse(storageChecker);
  }

  if(item in db)
  {
      db[item]=db[item]+1;
  }
  else
  {
      db[item]=1;
  }
  
  localStorage.setItem("name", JSON.stringify(db));
}

addToDb("Hamid Hosen")
addToDb("Hamid Hosen")
addToDb("Hamid Hosen")
addToDb("EDU")
addToDb("EDU")
addToDb("DU")
addToDb("DU")
addToDb("CU")
addToDb("CU")
addToDb("BU")

// console.log(localStorage.getItem("name"));

const removeItem=item=>{
    const storedTracker=localStorage.getItem("name");

    if(storedTracker)
    {
        const storeObject=JSON.parse(storedTracker);
        delete storeObject[item];
        localStorage.setItem("name",JSON.stringify(storeObject));
    }
}

removeItem("Hamid Hosen");