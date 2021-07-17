// const person : {
//     name: string;
//     age: number;
//     nickname: string;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Jeanette',
//     age: 33,
//     nickname: 'Jeanettey-Spaghetti',
//     hobbies: ['coding', 'dancing', 'exploring'],
//     role: [2, 'teacher']
// };

enum Role { ADMIN = 7, READ_ONLY, TEACHER = 11};
// above ADMIN === 0, READ_ONLY === 1, etc.

const person = {
    name: 'Jeanette',
    age: 33,
    nickname: 'Jeanettey-Spaghetti',
    hobbies: ['coding', 'dancing', 'exploring'],
    // role: [2, 'teacher'],
    // role: 'READ ONLY USER',
    role: Role.ADMIN,
};

console.log(person.nickname);
for(const hobby of person.hobbies)  {
    console.log(hobby.toUpperCase());
};

// person.role[0] = 5;
// person.role[1] = 'choreographer';
console.log(person.role);
console.log('Role>>>', Role);
