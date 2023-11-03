// Write your code here

// function Book(title, author, ISBN, numCopies){
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function (){
//   if (this.numCopies === 0){
//     return "Out of stock";
//   }else if (this.numCopies < 10){
//     return "Low stock"
//   } 
//   return "in stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//   this.numCopies -= numCopiesSold;

// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//   this.numCopies += numCopiesStocked;
// }

//Using Class component
class Book{
constructor(title, author, ISBN, numCopies){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}

get availabilty (){
  return this.getAvailability();
}
getAvailability = function (){
  if (this.numCopies === 0){
    return "Out of stock";
  }else if (this.numCopies < 10){
    return "Low stock"
  } 
  return "in stock";
}
restock = (numCopiesStocked = 5)=>{
  this.numCopies += numCopiesStocked;
}
sell = (numCopiesSold = 1)=>{
  this.numCopies -= numCopiesSold;
}
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());