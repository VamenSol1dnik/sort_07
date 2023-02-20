let arr = []; 


let length = prompt("Введіть довжину масиву:");


for (let i = 0; i < length; i++) {
  let value = prompt(`Введіть елемент масиву ${i+1}:`);
  arr.push(value);
}

console.log(`Початковий масив: [${arr}]`);

arr.sort();


    console.log(`Масив після сортування: [${arr}]`);
arr.splice(1, 3);

    console.log(`Масив після видалення елементів: [${arr}]`);



    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }