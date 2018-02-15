var person = {
  id: 1,
  name: "aiman",
  color: "red"
};

var Employees = [
  {
    id: 1,
    name: "aiman",
    color: "red"
  },
  {
    id: 2,
    name: "aiman",
    color: "red"
  },
  {
    id: 3,
    name: "aiman",
    color: "red"
  },
  {
    id: 4,
    name: "aiman",
    color: "red"
  }
];
for (let index = 0; index < Employees.length; index++) {
  const element = Employees[index];
  console.log(element);
  for (const key in element) {
    if (element.hasOwnProperty(key)) {
      const e = element[key];
      console.log(e);
    }
  }
}

var Manager = [
  {
    Manager_name: "Aiman",
    id: 1,
    color: "blue"
  },
  {
    Manager_name: "Ali",
    id: 2,
    color: "blue"
  },
  {
    Manager_name: "Aamir",
    id: 3,
    color: "blue"
  },
  {
    Manager_name: "saad",
    id: 4,
    color: "blue"
  },
  {
    Manager_name: "khalid",
    id: 5,
    color: "blue"
  },
  {
    Manager_name: "maajid",
    id: 6,
    color: "blue"
  }
];



for (let index = 0; index < Manager.length; index++) {w
    const manager=Manager[index];
for (const key in manager) {
    if (manager.hasOwnProperty(key)) {
        const managervalues = manager[key];
        console.log(managervalues);
        
    }
}    
}