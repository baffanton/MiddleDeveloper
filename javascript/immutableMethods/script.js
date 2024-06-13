// Суть иммутабельных методов: объект (массив), состояние которого не может быть изменено после создания,
// т.е. в результате метода будет создание нового объекта (массива)

//
// Массив
//

const immutableArray = ["a", "b", "c", "d", "e"];
let mutableArray = ["a", "b", "c", "d", "e"];

// Добавление
console.log("---------ДОБАВЛЕНИЕ---------");

console.log("Мутабельный метод push");
console.log(mutableArray);
mutableArray.push("f"); // Ничего не возвращает, но результата изменился (альтернатива - ushift)
console.log(mutableArray);

console.log("\nИммутабельный метод concat");
console.log(immutableArray);
const immutebleConcat = immutableArray.concat("f"); // Простая альтернатива - оператор расширения (immutableConcat = [ ...immutableArray, "f" ])
console.log(immutableArray);
console.log("\n");

// Удаление

console.log("---------УДАЛЕНИЕ---------");

console.log("Мутабельный метод pop");
console.log(mutableArray);
mutableArray.pop(); // Ничего не возвращает, но результата изменился (альтернатива - shift)
console.log(mutableArray);

console.log("\nИммутабельный метод filter");
console.log(immutableArray);
const immutebleFilter = immutableArray.filter((item) => item !== "f"); // Альтернатива - slice (откуда и до куда обрезаем)
console.log(immutableArray);
console.log("\n");

// Замена

console.log("---------ЗАМЕНА---------");

console.log("Мутабельный метод splice");
console.log(mutableArray);
mutableArray.splice(2, 1, "f");
console.log(mutableArray);

console.log("\nИммутабельный метод map");
console.log(immutableArray);
const immutebleMap = immutableArray.map((item, index) =>
  index === 2 ? "f" : item
);
console.log(immutableArray);

//
// Объект
//

const immutableObject = Object.freeze({ label: "label", value: "value" });
const mutableObject = { label: "label", value: "value" };

// Примеры иммутабельных методов
const keys = Object.keys(mutableObject);
const values = Object.values(mutableObject);

// Примеры мутабельных методов
