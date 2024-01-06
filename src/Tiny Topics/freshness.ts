const person = { Fname: "wafiq", Lname: "hossain" };
const house = { name: "Esam_House", road: "5/3" };

const getDetails = (detail: { Fname: string; Lname: string }) => {
  return detail;
};

console.log(getDetails(person));
