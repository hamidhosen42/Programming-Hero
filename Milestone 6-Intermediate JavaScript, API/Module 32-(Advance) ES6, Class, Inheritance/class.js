class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name,address)
  {
      this.name=name;
      this.address=address;
  }
  startSession() {
    console.log(this.name,"start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
aamir.startSession();
console.log(aamir);

const salman = new Support("Solaiman Khan", "Dubai");
salman.startSession();
console.log(salman);

const sharuk = new Support("SRK Khan", "Dubai");
sharuk.startSession();
console.log(sharuk);

const akshay = new Support("Akshay Kumar", "Dubai");
akshay.startSession();
console.log(akshay);