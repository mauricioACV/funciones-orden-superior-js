console.clear();
const personas = [
  { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
  { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
  { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
  { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
  { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
  { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
  { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
  { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
  { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
  { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
  { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
  { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 }
];

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y apellido de cada persona

//Solución 1
const soloFirstLast = personas.map((persona) => {
  return { first: persona.first, last: persona.last };
});

//Solución con destructuring de objetos
const soloFirstLast2 = personas.map(({ first, last }) => {
  return { first, last };
});
console.log("Ejercicio 1 - Solución 1");
console.log(soloFirstLast);
console.log("Ejercicio 1 - Solución 2");
console.log(soloFirstLast2);

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y la fecha de nacimiento de cada persona

//Solución 1
const soloFirstNacio = personas.map((persona) => {
  return { first: persona.first, nacio: persona.nacio };
});

//Solución con destructuring de objetos
const soloFirstNacio2 = personas.map(({ first, nacio }) => {
  return { first, nacio };
});

console.log("Ejercicio 2 - Solución 1");
console.log(soloFirstNacio);
console.log("Ejercicio 2 - Solución 2");
console.log(soloFirstNacio2);

// Utiliza .filter para crear un nuevo array de objetos
// donde cada objeto represente la persona que haya nacido durante el 1800

//Solución 1
const nacio1800a = personas.filter(
  (persona) => persona.nacio >= 1800 && persona.nacio < 1900
);

//Solución con destructuring de objetos
const nacio1800b = personas.filter(
  ({ nacio }) => nacio >= 1800 && nacio < 1900
);

console.log("Ejercicio 3 - Solución 1");
console.log(nacio1800a);
console.log("Ejercicio 3 - Solución 2");
console.log(nacio1800b);

// Utiliza .map para crear un nuevo array de objetos con el apellido
// de cada persona y su edad (murio - nacio)

//Solución 1
const nombreEdad = personas.map((persona) => {
  return { nombre: persona.first, edad: persona.murio - persona.nacio };
});

//Solución con destructuring de objetos
const nombreEdad2 = personas.map(({ first, nacio, murio }) => {
  return { nombre: first, edad: murio - nacio };
});

console.log("Ejercicio 4 - Solución 1");
console.log(nombreEdad);
console.log("Ejercicio 4 - Solución 2");
console.log(nombreEdad2);

// Utiliza .filter para crear un nuevo array de objetos con las personas
// cuyo nombre sea mayor a 4 letras

//Solución 1
const nombreLetras = personas.filter((persona) => persona.first.length > 4);

//Solución con destructuring de objetos
const nombreLetras2 = personas.filter(({ first }) => first.length > 4);

console.log("Ejercicio 5 - Solución 1");
console.log(nombreLetras);
console.log("Ejercicio 5 - Solución 2");
console.log(nombreLetras2);

// Utiliza .filter para crear un nuevo array de objetos con las personas
// que hayan nacido después de 1800

//Solución 1
const nacioMayor1800a = personas.filter((persona) => persona.nacio > 1800);

//Solución con destructuring de objetos
const nacioMayor1800b = personas.filter(({ nacio }) => nacio > 1800);

console.log("Ejercicio 6 - Solución 1");
console.log(nacioMayor1800a);
console.log("Ejercicio 6 - Solución 2");
console.log(nacioMayor1800b);

// Utiliza .filter  para para crear un nuevo array de objetos con las personas
// que hayan tenido una edad par (edad % 2 === 0, busca en google el operador "modulo")

//Solución 1
const edadPar = personas.filter(
  (persona) => (persona.murio - persona.nacio) % 2 === 0
);

//Solución con destructuring de objetos
const edadPar2 = personas.filter(
  ({ murio, nacio }) => (murio - nacio) % 2 === 0
);

console.log("Ejercicio 7 - Solución 1");
console.log(edadPar);
console.log("Ejercicio 7 - Solución 2");
console.log(edadPar2);
