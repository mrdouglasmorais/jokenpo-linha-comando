const options = require('./data');
const User = require('./controller/class/user')

let jogar = new User({ opt: options }).game()

jogar
