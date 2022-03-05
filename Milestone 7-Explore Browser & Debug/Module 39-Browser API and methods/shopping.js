const displayLocalStorageCart = () => {
  const cart = getCard();

  for (const name in cart) {
    displayProducts(name);
  }
};

const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;

  if (!name) {
    return;
  }

  // display in ui
  displayProducts(name);

  // add to local storage
  addProductToCard(name);

  //cleare
  nameField.value = "";
};

const displayProducts = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;

  ul.appendChild(li);
};

const getCard = () => {
  // getItem() ব্যবহার করে Local Storages এবং Session Storage থেকে নির্দিষ্ট মান রিটার্ন করা হই।
  const card = localStorage.getItem("cart");
  let cartObj;

  if (card) {
    //   Local Storage এবং Session Storage এর অবজেক্ট নিয়ে কাজ করতে হলে সেটাকে প্রথমে JSON.parse() করতে হবে।
    cartObj = JSON.parse(card);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCard = (name) => {
  const cart = getCard();

  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }

  // Local Storage এবং Session Storage এ কোন অবজেক্ট সেট করার আগে JSON.stringify() করতে হবে।
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);

  //   console.log(cart);
};

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};

displayLocalStorageCart();