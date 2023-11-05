
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

// Write your code here

class TechnicalBook extends Book{
  constructor(title, author, ISBN, numCopies, edition){
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition(){
    return `The current version of this boo is ${this.edition}`;
  }
}

const CrackingTheCodingInterview = new TechnicalBook("Cracking The Coding Interview", )