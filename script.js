/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let id = arr.length;
  let newData = {
    id: id + 1,
    name: "Ankit",
    age: "22",
    profession: "developer",
  };
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployee = [
    { id: 4, name: "Alan", age: "19", profession: "intern" },
    { id: 5, name: "Julia", age: "20", profession: "developer" },
  ];

  let concateArr = arr.concat(newEmployee);
  console.log(concateArr);
}
