export {}

class MyNumberCard {
  private _owner: string
  private _secretNumber: number
  constructor( owner: string, secretNumber: number) {
    this._owner = owner
    this._secretNumber = secretNumber
  }

  get owner(){
    return this._owner
  }

  set secretNumber(secretNumber:number){
    this._secretNumber = secretNumber
  }

  debugPrtint(){
    return `secretNumber:${this._secretNumber}`
  }
}

let card = new MyNumberCard('はむさん', 1234567890)
// card.owner = 'Ham'
console.log(card.owner)
card.secretNumber = 1111111111
// card._secretNumber
console.log(card.debugPrtint())
console.log(card.secretNumber)