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
