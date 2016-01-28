var cat = {
  name: 'Fluffy',
  color: 'White'
};

//display(cat.color);
//display(cat['color']);
cat['Eye Color'] = 'Green';

//property descriptors-writable attribute
display(Object.getOwnPropertyDescriptor(cat, 'name'));
Object.defineProperty(cat, 'name', {writable: false});
Object.freeze(cat.name);

//property descriptors-enumerable attribute
//for..in
for(var propertyName in cat) {
  display(propertyName);
}

for(var propertyName in cat) {
  display(propertyName + ': ' + cat[propertyName]);
}

Object.defineProperty(cat, 'name', {enumerable: false});

display(Object.keys(cat));

display(JSON.stringify(cat));

//configuarable

Object.defineProperty(cat, 'name', {configuarable: false});

//Getters and Setters

Object.defineProperty(cat, 'fullName',
  {
    get: function() {
      return this.name.first + ' ' + this.name.last;
    },
    set: function(value) {
      var nameParts = value.split(' ');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    }
  });
cat.fullName = 'Mog Tiger';
display(cat.fullName);

var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this done'
});
console.log(task.text);
//'Get this done'

var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this done',
  writable: true
});
task.text = task.text + '....';
console.log(task.text);
//'Get this done ....'

var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this done',
  enumerable: true
});
for (var f in task)
  console.log(f);
//text

var task = {
  _dueDate: '1/15/16'
};
Object.defineProperty(task, 'dueDate', {
  get: function() {
    return this._dueDate;
  }
});
console.log(task.dueDate);
// 1/15/16

var task = {
  _dueDate: '1/01/12'
};

Object.defineProperty(task, 'dueDate', {
  get: function() {
    return this._dueDate;
  },
  set: function(newValue) {
    this._dueDate = newValue;
  }
});
task.dueDate = '2/2/16';
console.log(task.dueDate);

var task = {};
Object.defineProperties(task, {
  'text': {
    value: 'New task'
  },
  'dueDate' : {
    value: '1/12/15'
  }
});
console.log(task.text + ' Due: ' + task.dueDate);
//New task Due: 1/12/15

var task = { };
Object.defineProperties(task, {
  'text': {
    value: 'New Task'
  }
});
var descriptor = Object.getOwnPropertyDescriptor(task, 'text');
console.log(descriptor);
/*
[object Object] {
  configurable: false,
  enumerable: false,
  value: "New Task",
  writable: false
}
*/
