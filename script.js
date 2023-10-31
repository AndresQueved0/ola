/* EJEMPLO 1
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayName() {
      console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
  }
  
  const pedro = new Person(`Pedro`, 30);
  pedro.sayName(); // Output: Hola, mi nombre es Pedro y tengo 30 años.
*/
/*Ejemplo2
class Counter {
    constructor() {
      let count = 0;
  
      this.increment = function() {
        count++;
      };
  
      this.getCount = function() {
        return count;
      };
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Output: 2
  */

  /*class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayName() {
      console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    sayGrade() {
      console.log(`Mi nota es ${this.grade}.`);
    }
  }
  
  const juan = new Student(`Juan`, 18, 9);
  juan.sayName(); // Output: Hola, mi nombre es Juan y tengo 18 años.
  juan.sayGrade(); // Output: Mi nota es 9.*/

  /*let peso = prompt("Ingrese su peso") 

switch (true) {
  case peso <= 40:
    console.log("Persona baja de peso");
    break;
  case peso >= 41 && peso <= 70:
    console.log("Persona peso promedio");
    break;
  default:
    console.log("sobrepeso");
}*/

/*const persona = [];

for (let i = 1; i <= 5; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona ${i}:`);
  const peso = prompt(`Ingrese el peso de la persona ${i}:`);
  people.push({ nombre, peso });
}

for (let i = 0; i < people.length; i++) {
  switch (true) {
    case persona[i].peso < 40:
      console.log(`${persona[i].nombre} esta baja de peso.`);
      break;
    case persona[i].peso >= 41 && persona[i].peso <= 70:
      console.log(`${persona[i].nombre} tiene peso promedio.`);
      break;
    default:
      console.log(`${persona[i].nombre} con sobrepeso.`);
  }
}*/

/*for (let i = 1; i <= 5; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona ${i}:`);
  const peso = Number(prompt(`Ingrese el peso de la persona ${i}:`));

  switch (true) {
    case (peso < 40):
      console.log(`${nombre} esta baja de peso.`);
      break;
    case (peso >= 41 && peso <= 70):
      console.log(`${nombre} tiene peso promedio.`);
      break;
    default:
      console.log(`${nombre} con sobrepeso.`);
  }
}
*/

/*
for (let i = 1; i <= 3; i++) {
  const Notafinal = parseInt(prompt(`Ingrese la nota final del estudiante` +i+`:`));

  switch (true) {
    case (Notafinal>= 1 && Notafinal <= 3.3):
      console.log(`El estudiante` +i+ `tiene un rendimiento bajo.`);
      break;
    case (Notafinal >= 3.4 && Notafinal <= 3.8):
      console.log(`El estudiante` +i+ `tiene un rendimiento básico.`);
      break;
    case (Notafinal >= 3.9 && Notafinal <= 4.4):
      console.log(`El estudiante` +i+ `tiene un rendimiento alto.`);
      break;
    default:
      console.log(`El estudiante` +i+ `tiene un rendimiento superior.`);
  }
}*/

for (let i = 1; i <= 3; i++) {
  const nombre = prompt(`Ingrese el nombre del estudiante`+i+`:`);
  const notaFinal = parseInt(prompt(`Ingrese la nota final del estudiante` +i+`:`));

  switch (true) {
    case (notaFinal >= 1 && notaFinal <= 3.3):
      console.log(nombre + ` tiene un desempeñox bajo.`);
      break;
    case (notaFinal >= 3.4 && notaFinal <= 3.8):
      console.log(nombre + ` tiene un desempeño básico.`);
      break;
    case (notaFinal >= 3.9 && notaFinal <= 4.4):
      console.log(nombre+ ` tiene un desempeño alto.`);
      break;
    default:
      console.log(nombre + ` tiene un desempeño superior.`);
  }
}