const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
        sessionStorage.setItem(id,value);
    }
    idInput.value = '';
    valueInput.value = '';
}
const pen={'pen':10,'price':20}
localStorage.setItem('pen',JSON.stringify(pen));
localStorage.setItem("us",JSON.stringify([1,2,3,4,5]))
localStorage.setItem("userId",191002012);
localStorage.setItem("userId",191002112);
sessionStorage.setItem("userId",191002012);
const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};
localStorage.setItem("emp",JSON.stringify(employee));

const storeEmp=localStorage.getItem('emp');
console.log(storeEmp);
console.log(JSON.parse(storeEmp));

console.log(localStorage.getItem('userId'));

/* 
১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে 
২. location API কিভাবে ইউজ করবে ব্রাউজারে 
৩. history API কিভাবে ইউজ করে 

localStorage.clear;
localStorage.setItem; new item add
localStorage.getItem;
*/