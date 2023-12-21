//14

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

for (let index = 0; index < itCompanies.length; index++) {
  if (
    itCompanies[index].toLowerCase().indexOf("o") <
    itCompanies[index].toLowerCase().lastIndexOf("o")
  ) {
    itCompanies.splice(index, 1);
    index--;
  }
}

console.log(itCompanies);
// console.log("Google".match(/o/gi));

//15