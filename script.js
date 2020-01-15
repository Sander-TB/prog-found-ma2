// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
console.log(petArray.push("sheep"));

// question 4
console.log(petArray.length);

// question 5
var catObject = {
  name: "Giovanni",
  color: "orange",
  age: 5
};

// question 6
console.log(catObject.age);

// question 7
var catArray = [
  {
    name: "Giovanni",
    color: "orange",
    age: 5
  }
];

// question 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);

  console.log(catArray[i].name);
  console.log(catArray[i].color);
  console.log(catArray[i].age);
}

// question 9
function logToConsole(randomWord) {
  console.log(randomWord);
}

logToConsole("hello");

// question 10

var animal = "donkey";

function logToConsole(randomWord) {
  console.log("The word passed in is " + randomWord);
}

logToConsole(animal);
