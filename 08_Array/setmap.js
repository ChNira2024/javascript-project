//Set (Unique Values Only): A Set stores only unique values (no duplicates allowed)
// Create a Set
const set = new Set([1, 2, 3, 3, 4]);
console.log(set); // {1, 2, 3, 4} Duplicate 3 is removed automatically

set.add(5);
console.log(set);

set.delete(2);
console.log(set);

console.log(set.has(3)); // true

set.forEach(value => console.log(value));

//Remove duplicates from array
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]

//=====================================
//Map (Key–Value Pair): A Map stores data as key-value pairs (like object, but more powerful)
const map = new Map();
map.set("name", "Niran");
map.set("age", 25);
console.log(map);

map.forEach((value, key) => {
  console.log(key, value);
});

console.log(map.get("name")); // Niran
console.log(map.has("age")); // true

map.delete("age");
console.log(map.size);

