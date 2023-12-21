// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

const products = [{
        name: "Product 1",
        price: 20,
        category: "Electronics"
    },
    {
        name: "Product 2",
        price: 30,
        category: "Clothes"
    },
    {
        name: "Product 3",
        price: 40,
        category: "Electronics"
    },
    {
        name: "Product 4",
        price: 50,
        category: "Clothes"
    },
    {
        name: "Product 5",
        price: 60,
        category: "Clothes"
    },
    {
        name: "Product 6",
        price: 70,
        category: "Electronics"
    },
    {
        name: "Product 7",
        price: 80,
        category: "Clothes"
    },
    {
        name: "Product 8",
        price: 90,
        category: "Electronics"
    },
    {
        name: "Product 9",
        price: 110,
        category: "Electron"
    },
    {
        name: "Product 9",
        price: 11,
        category: "Electric"
    },
];

const expectedOutput = [{
        category: 'Clothes',
        average: 55
    },
    {
        category: 'Electronics',
        average: 55
    }
]

let uniques = [];

products.forEach((eleman) => uniques.includes(eleman.category) ? null : uniques.push(eleman.category))

let result = [];

for (let unique of uniques) {
    result.push({
        category: unique,
        average: products.filter((eleman) => eleman.category == unique).reduce((acc, eleman) => acc + eleman.price, 0) / products.filter((eleman) => eleman.category == unique).length
    })
}

console.log(result.filter((eleman) => eleman.average > 50))