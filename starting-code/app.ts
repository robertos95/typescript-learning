const person: {
  name: String;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // const person = {
  name: "Roberto",
  age: 25,
  hobbies: ["Chess", "Toastmasters", "Mobile Legends"],
  role: [2, "author"],
};

// person.role.push("admin"); // exception (tuple can't check push)
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
