console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('create', 'Creates the user', function(yargs){
    yargs.options({
      name:{
        demand: true,
        alias: 'n',
        type: 'string',
        description: 'Your first name'
      },
      username:{
        demand: 'true',
        alias: 'u',
        type: 'string',
        description: 'Your username'
      },
      password:{
        demand: 'true',
        alias:'p',
        type: 'string',
        description: 'Your password'
      }
    }).help('help');
  })
  .command('get', 'Gets the user', function(){
    yargs.options({
      name:{
        demand: 'true',
        alias: 'n',
        type: 'string',
        description: 'Your name'
      }
    }).help('help');
  })
  .help('help')
  .argv;


var command = argv._[0];

function createAccount(account){
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);
 
  return account;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function(account){
    if(account.name === accountName){
      matchedAccount = account;
    } else {
      return 'undefined'
    }
  });
  return matchedAccount;
}
if (command == 'create'){
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account created!');
  console.log(createdAccount);
} else if(command === 'get') {
  var fetchedAccound = getAccount(argv.name);

  if(typeof fetchedAccount === 'undefined') {
    console.loh('Account not found');
  } else {
    console.log('Account found!');
    conaole.log(fetchedAccount);
  }
}
