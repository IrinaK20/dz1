// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие,
// используя переданное ей имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда полученное от пользователя значение.

// const name = prompt("введите Ваше имя");
// alert(`привет, ${name}!`);

// function greeting(){
//     const name = prompt("введите Ваше имя");
//     greeting = `привет, ${name}!`;
// }
// greeting();
// alert(greeting);

const name = prompt("введите Ваше имя");
greeting(name);
function greeting(name) {                           // выводит в консоль!!!
  console.log(`привет, ${name}!`);
}
