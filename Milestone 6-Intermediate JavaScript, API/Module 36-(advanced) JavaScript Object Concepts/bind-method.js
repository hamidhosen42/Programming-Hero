const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense) 
  {
    this.money = this.money - expense;
    console.log("Here ",this);
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

kibria.treatDey(100);

const heroTreatDay=kibria.treatDey.bind(heroBalam);
heroTreatDay(500);
heroTreatDay(300);
heroTreatDay(500);
kibria.treatDey(400);

const normalTreadDay=kibria.treatDey.bind(normalGolam);
normalTreadDay(500);