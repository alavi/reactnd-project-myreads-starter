// Slow solution
const _ = require('lodash');

let res1 = [
  {id:1, name:'Sandra'},
  {id:2, name:'Bill'},
  {id:3, name:'Peter'},
  {id:4, name:'Jill'}
];

let res2 = [
  {id:2, name:'John'},
  {id:4, name:'Bobby'}
];

_.forEach(res1, function(data1) {
  _.forEach(res2, function(data2) {
    if (data1.id === data2.id) {
      data2.name = data1.name;
    }
  });
});

// res2 = [{id:2, name:'bill'},{id:4, name:'Jill'}];
////////
// Faster solution
const res1 = [
  {id:1, name:'Sandra'},
  {id:2, name:'Bill'},
  {id:3, name:'Peter'},
  {id:4, name:'Jill'}
];

const res2 = [
  {id:2, name:'John'},
  {id:4, name:'Bobby'}
];

const res1Map = _.keyBy(res1, 'id');

res2.forEach((o) => res1Map[o.id] && (o.name = res1Map[o.id].name));

console.log(res2);

///////////////
//another Solution:
let res1 = [
  {id:1, name:'Sandra'},
  {id:2, name:'Bill'},
  {id:3, name:'Peter'},
  {id:4, name:'Jill'}
];

let res2 = [
  {id:2, name:'John'},
  {id:4, name:'Bobby'}
];

res2.forEach((item) => {
  item.name = res1.find((person) => person.id === item.id).name
});

console.log(res2);
