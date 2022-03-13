const passWord="HamidHosen";
console.log(/[0-9]/.test(passWord));

console.log(/[A-Z]/.test(passWord));
console.log(/[0-5]/.test('today50'));
console.log(/[0-5]/.test('today90'));
console.log(/(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){2})/.test("simp!le@"));
console.log();