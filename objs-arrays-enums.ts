const person = {
    name: 'C.T.',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

console.log(person)

for (const hobby of person.hobbies) {
console.log(hobby.toUpperCase())
}