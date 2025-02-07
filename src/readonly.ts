export {}

class VisaCard {
  constructor(readonly owner:string) {}
}

let myVisaCard = new VisaCard('はむさん')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'ベーコン'