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
