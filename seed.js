
const db = require('./db')
const Campus = db.models.campus;
const Student = db.models.student;

console.log(db.models)

const campuses = [{
    name: 'shuzhou',
    imageurl: '/Users/liwang/Desktop/senior-enrichment/db/images/campus_1.jpg'
},{
    name: 'peking',
    imageurl: '/Users/liwang/Desktop/senior-enrichment/db/images/campus_2.jpg'
},{
    name: 'zhongshan',
    imageurl: '/Users/liwang/Desktop/senior-enrichment/db/images/campus_3.jpg'
},{
    name: 'tsinghua',
    imageurl: '/Users/liwang/Desktop/senior-enrichment/db/images/campus_4.jpg'
}]

const students = [{
    campusId: 1,
    name: 'Cody',
    email: 'codey@gmail.com'
}
, {
    campusId: 1,
    name: 'Ben',
    email: 'ben@gmail.com'
}, {
    campusId: 2,
    name: 'Star',
    email: 'star@gmail.com'
}, {
    campusId: 4,
    name: 'Cofee',
    email: 'cofee@gmail.com'
}, {
    campusId: 2,
    name: 'Moon',
    email: 'moon@gmail.com'
}
]

const seed = () =>
Promise.all(campuses.map(campus =>
  Campus.create(campus))
)
.then(() =>
Promise.all(students.map(student =>
  Student.create(student))
))


const main = () => {
console.log('Syncing db...');
db.sync({ force: true })
  .then(() => {
    console.log('Seeding databse...');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    return null;
  });
};

main();