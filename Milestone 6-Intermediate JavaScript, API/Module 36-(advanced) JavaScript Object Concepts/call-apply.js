const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense,boksis,tax) {
    this.money = this.money - expense-boksis-tax;
    console.log("Here ", this);
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};

const normalGolam = {
  id: 102,
  money: 8000,
  name: "Normal Golam",
};

// call
kibria.treatDey.call(heroBalam,500,100,50);
kibria.treatDey.call(heroBalam,300,100,30);

kibria.treatDey.apply(heroBalam,[300,100,30]);
kibria.treatDey.apply(heroBalam,[300,100,30]);

kibria.treatDey.apply(normalGolam,[300,100,30]);