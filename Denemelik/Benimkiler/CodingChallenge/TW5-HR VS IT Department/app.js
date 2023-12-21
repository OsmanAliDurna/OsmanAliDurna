// Task : You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

const employees = [{
        name: "John",
        salary: 50000,
        department: "IT"
    },
    {
        name: "Jane",
        salary: 60000,
        department: "HR"
    },
    {
        name: "Bob",
        salary: 55000,
        department: "IT"
    },
    {
        name: "Sophie",
        salary: 75000,
        department: "HR"
    },
    {
        name: "Mike",
        salary: 65000,
        department: "IT"
    },
    {
        name: "Emily",
        salary: 80000,
        department: "HR"
    },
    {
        name: "David",
        salary: 70000,
        department: "IT"
    },
];

const expectedOutcome = [{
    department: 'HR',
    average: 71666
}]

let uniques = [];

employees.forEach((eleman) => uniques.includes(eleman.department) ? null : uniques.push(eleman.department))

let result = [];

for (let unique of uniques) {
    result.push({
        department: unique,
        average: Math.floor(employees.filter((eleman) => eleman.department == unique).reduce((acc, eleman) => acc + eleman.salary, 0) / employees.filter((eleman) => eleman.department == unique).length)
    })
}

console.log(result.filter((eleman) => eleman.average > 65000))