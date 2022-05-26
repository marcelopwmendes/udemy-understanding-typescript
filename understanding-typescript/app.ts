// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Marcelo",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, 'Author']
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Marcelo",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("Admin");

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
