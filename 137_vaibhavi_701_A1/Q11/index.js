// index.js
const firstNames = ["Aarav", "Isha", "Rahul", "Priya", "Karan", "Neha"];
const lastNames = ["Sharma", "Patel", "Singh", "Verma", "Desai", "Khan"];
const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
const cities = ["Surat", "Ahmedabad", "Mumbai", "Delhi", "Bangalore"];
const countries = ["India", "USA", "UK", "Canada", "Australia"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min = 0, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  randomFirstName: () => randomItem(firstNames),
  randomLastName: () => randomItem(lastNames),
  randomFullName: () => `${randomItem(firstNames)} ${randomItem(lastNames)}`,
  randomEmail: () =>
    `${randomItem(firstNames).toLowerCase()}${randomNumber(
      10,
      99
    )}@${randomItem(domains)}`,
  randomCity: () => randomItem(cities),
  randomCountry: () => randomItem(countries),
  randomPhone: () => `+91-${randomNumber(6000000000, 9999999999)}`,
  randomString: (length = 8) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => randomItem(chars.split(""))).join("");
  },
};
