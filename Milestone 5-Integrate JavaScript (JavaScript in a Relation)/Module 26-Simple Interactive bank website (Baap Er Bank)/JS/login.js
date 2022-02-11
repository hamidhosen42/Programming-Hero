document.getElementById("login-submit").addEventListener("click", function () {
  // console.log("button click");

  // get user email
  const userEmail = document.getElementById("user-email").value;
  //   console.log(userEmail);

  // get user password
  const userPass = document.getElementById("user-password").value;
  //   console.log(userPass);

  //check email and password
  if (userEmail == "hamidhosen6403@gmail.com" && userPass == "admin123") {
    //   console.log("valid user");
    window.location.href = "banking.html";
  } else {
    console.log("Invalid user");
  }
});