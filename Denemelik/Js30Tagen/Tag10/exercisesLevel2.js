const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const unionAB = new Set([...b, ...a]);
console.log(unionAB);

const IntersectionAB = new Set(b.filter((eleman) => a.includes(eleman)));
console.log(IntersectionAB);

const diffAB = new Set(a.filter((eleman) => !b.includes(eleman)));
const diffBA = new Set(b.filter((eleman) => !a.includes(eleman)));
console.log(diffAB)
console.log(diffBA)