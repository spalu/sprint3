// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let x = 16;
// b) Utwórz zmienną typu string przechowującą twoje imię.
let firstName = "Przemek";
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let month = null;
month = "December";
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const people = {
    name: "Przemek",
    age: 20
};
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let a = true;
const b = false;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
x = 2;
y = 5;
const result = x+y;
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const fullName = "Przemysław Spalik";
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let pi = 3.1489302;
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
const mathResult = 16 + 4;
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = "Koszalin";

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
const other = ["Koszalin", 16, true];
// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
    make: "Volkswagen",
    model: "T4 Multivan",
    year: 2003
};
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const number = [16, 15, 245];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const person = {
    name: "Marek",
    age: 23,
    isStudent: true
};
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
const object = {};
object.color = "blue";
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
    const dog = {name: "Fafik", age: 3},
    const cat = {name: "Mruczka", age: 1}
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const table = [true, false];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student = {
    name: "Marek",
    grades: [2,3,5,6],
    isActive: true
};
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const table = ["Marek", 15, 20, 2.34534, true, {name: "Krzysiek", age: 20, isStudent: false }];
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
    title: "Inferno",
    author: "Dan Brown",
    yearPublished: 2013
};

​
// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
const x = 5;
if(x > 10) {
    console.log ("x > 10");
}
else
{
    console.log ("x<10");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
const text = "Hello";
if(text = "Hello") {
    console.log ("text = Hello");
}
else
{
    console.log ("text != Hello");
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
let number = 16;
let result = (number >= 16) ? "Większe lub równe 16" : "Mniejsze niz 16";
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let age = 14;
if (age >= 18) {
    console.log ("Większe lub równe 18");
}
else{
    console.log ("Mniejsze niz 18");
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
const furniture = ["chair", "table", "dresser"];
if (furniture === 0) {
    console.log("Tablica jest pusta");
}
else {
    console.log("Tablica nie jest pusta");
}
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = true;
let rabat = (isMember = true) ? rabat = 15 : rabat = 0;
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let text = "Mareczek";
if (text.length > 5){
    console.log("Długość ciągu znaków jest większa niz 5");
}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let number = 3;
if (number % 2 == 0){
    console.log("Liczba jest parzysta")''
}
else {
    console.log("Liczba jest nieparzysta");
}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let tekst1 = "Marek";
let tekst2 = "Krzysiek";
let wynik = (tekst1.length > tekst2.length) ? "tekst1 ma więcej liter" : "tekst2 ma więcej liter";
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
const obiekt = {
    kolor: "blue",
    miasto: "Koszalin"
};
if ("miasto" in object) {
    console.log("Obiekt ma określony klucz");
}

