function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
};

function testStrict(val) {
  if (val===7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
    return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  
  if (val < 10 || val > 20) {
    return "Outside";
  }

    return "Inside";
};

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
    return result;
};

function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
};

const checkObj = (obj, checkProp) => obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';

function test(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}
test(10);

function users(val) {
  
  if (val < 10 || val > 20) {
    return "Outside";
  }

    return "Inside";
};


function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
};

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  
console.log(arr2);

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
};


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.forEach(function(item) {
    const tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });

  return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);


function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
};

const Person = function(firstAndLast) {
  let fullName = firstAndLast;
    this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
    this.getLastName = function() {
    return fullName.split(" ")[1];
  };
    this.getFullName = function() {
    return fullName;
  };
    this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
    this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
    this.setFullName = function(name) {
    fullName = name;
  };
};
const bob = new Person("Bob Ross");
console.log(bob.getFullName());



















