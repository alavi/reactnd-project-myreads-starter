var _ = require('lodash');

myReads = [{id: "sJf1vQAACAAJ", shelf: "currentlyReading" , title: "Learning Web Development with React and Bootstrap", authors: ["naser", "Farzaneh"], publishedDate: "2016-12-30", description: "Build real-time responsive web apps using React an…and will have an insight into the best practices."}
,
{id:"sJf1vQAACAAJ" , shelf: "currentlyReading", title: "Satire TV", subtitle: "Politics and Comedy in the Post-Network Era", authors: ["Amir", "Ayda"], publisher: "NYU Press", publishedDate: "2009-04-01"}
,
{id: "1wy49i-gQjIC" , shelf: "currentlyReading" , title: "The Linux Command Line", subtitle: "A Complete Introduction", authors: ["Jame"], publisher: "No Starch Press", publishedDate: "2012"}
,
{id:"FpifBAAAQBAJ" , shelf:"currentlyReading" , title: "MEAN Web Development", authors: ["author1"], publisher: "Packt Publishing Ltd", publishedDate: "2014-09-25", description: "If you are a web or a full-stack JavaScript develo…tions using the MEAN stack, this book is for you."}
,
{id: "74XNzF_al3MC" , shelf:"wantToRead" , title: "Lords of Finance", subtitle: "The Bankers Who Broke the World", authors: ["Author2"], publisher: "Penguin", publishedDate: "2009-01"}
,
{id: "GteVGSDixUUC" , shelf: "wantToRead" , title: "Collaborative Web Development", subtitle: "Strategies and Best Practices for Web Teams", authors: ["naser"], publisher: "Addison-Wesley Professional", publishedDate: "1999"}
,
{id: "IPUyGk-c0gUC", shelf: "wantToRead" , title: "C# Web Development with ASP.NET", authors: ["Alavi"], publisher: "Peachpit Press", publishedDate: "2003", description: "Learn Microsoft's new C# language with this highly…dy reference for more experienced C# programmers."}
,
{id: "evuwdDLfAyYC" , shelf: "wantToRead" , title: "The Cuckoo's Calling", authors: ["Teymouri"], publisher: "Mulholland Books", publishedDate: "2013-04-30", description: "A brilliant debut mystery in a classic vein: Detec…ng, writing under the pseudonym Robert Galbraith."}
,
{id: "jAUODAAAQBAJ" , shelf: "read", title: "Needful Things", authors: ["Farzad"], publisher: "Simon and Schuster", publishedDate: "2016-05-03", description: "Now available for the first time in a mass-market …eat emptor. In other words, let the buyer beware…"}
,
{id: "IOejDAAAQBAJ" , shelf: "read" , title: "React", subtitle: "Die praktische Einführung in React, React Router und Redux", authors: ["Ali", "Hassan"], publisher: "dpunkt.verlag", publishedDate: "2016-07-07"}
,
{id: "0GOSxItz1ksC" , shelf: "read" , title: "Mobile Web Development", authors: ["Author5"], publisher: "Packt Publishing Ltd", publishedDate: "2008-02-06", description: "Building mobile websites, SMS and MMS messaging, m…all systems with XHTML MP, WCSS, and mobile AJAX."}
,
{id:"1w4fAwAAQBAJ" , shelf: "read", title: "Drama", authors: ["Author6"], publisher: "Scholastic Inc.", publishedDate: "2014-07-29", description: "From Raina Telgemeier, the #1 New York Times bests…thers enter the picture, things get even crazier!"}
,
{id: "1aL-MQEACAAJ" , shelf: "read" , title: "Drama", authors: ["Author7"], publisher: "Turtleback Books", publishedDate: "2012-09-01", description: "Callie rides an emotional roller coaster while ser… start and end, and others never quite get going."}
]

books= [

  {title: "MEAN Web Development", id: "FpifBAAAQBAJ", authors: ["author1"], publisher: "Packt Publishing Ltd", publishedDate: "2014-09-25", description: "If you are a web or a full-stack JavaScript develo…tions using the MEAN stack, this book is for you."}
  ,
  {title: "Mobile Web Development", id: "0GOSxItz1ksC",   publisher: "Packt Publishing Ltd", publishedDate: "2008-02-06", description: "Building mobile websites, SMS and MMS messaging, m…all systems with XHTML MP, WCSS, and mobile AJAX."}
  ,
  {title: "Collaborative Web Development",  id: "GteVGSDixUUC", subtitle: "Strategies and Best Practices for Web Teams",  publisher: "Addison-Wesley Professional", publishedDate: "1999"}
  ,
  {title: "C# Web Development with ASP.NET",  id: "IPUyGk-c0gUC", publisher: "Peachpit Press", publishedDate: "2003", description: "Learn Microsoft's new C# language with this highly…dy reference for more experienced C# programmers."}
  ,
  {title: "Beginning Smartphone Web Development",  id: "FozZWHiSxrsC", subtitle: "Building JavaScript, CSS, HTML and Ajax-based Appl…alm Pre, BlackBerry, Windows Mobile and Nokia S60",  publisher: "Apress", publishedDate: "2010-01-15"}
  ,
  {title: "Web Development with Java",  id: "Lq1BKNCW9-wC", subtitle: "Using Hibernate, JSPs and Servlets",  publisher: "Springer Science & Business Media", publishedDate: "2008-01-11"}
  ,
  {title: "PHP and MySQL Web Development",  id: "dgInDQAAQBAJ", publisher: "Addison-Wesley Professional", publishedDate: "2016-09-27", description: "Master today's best practices for succeeding with …t VI: Appendix A Installing Apache, PHP and MySQL"}
  ,
  {title: "Node.js, MongoDB and AngularJS Web Development",  id: "inzYAwAAQBAJ",  publisher: "Pearson Education", publishedDate: "2014", description: "Provides information for building dynamic, high pe…goDB, and AngularJS Web development technologies."}
  ,
  {title: "Web Development",  id: "hZkbAQAAMAAJ", subtitle: "A Visual-Spatial Approach",  publisher: "Prentice Hall", publishedDate: "2006-02-01"}
  ,
  {title: "Java Web Development Illuminated",  id: "oY9fShrQyUgC", publisher: "Jones & Bartlett Learning", publishedDate: "2007", description: "This text introduces students to the concepts of b…es, projects, case studies and hands-on examples."}
  ,
  {title: "Advanced FileMaker Pro 6 Web Development", id: "wc01KwHUeeoC",  publisher: "Wordware Publishing, Inc.", publishedDate: "2003", description: "This book covers all aspect of web publishing with FileMaker Pro."}
  ,
  {title: "Flask Web Development",  id: "VKRwAwAAQBAJ", subtitle: "Developing Web Applications with Python",  publisher: "OReilly Media, Inc.", publishedDate: "2014-04-28"}
  ,
  {title: "Careers in Web Development", id: "4t6iZ1LmIX8C" , publisher: "The Rosen Publishing Group", publishedDate: "2011-01-15", description: "Outlines a variety of different job opportunities in the field of web development."}
  ,
  {title: "User-centered Web Development", id: "wrIkWmtt-soC",  publisher: "Jones & Bartlett Learning", publishedDate: "2001", description: "Frequently, Web sites are designed without conside…rofit, An educational Web site and Eastman Kodak."}
  ,
  {title: "Mastering Web Development with Microsoft Visual Studio 2005",  id: "XXtoCqnxXVUC", authors: ["naser"], publisher: "John Wiley & Sons", publishedDate: "2006-01-03", description: "Be Right at Home in the World's Most Powerful Web …ment without Compromising Security or Reliability"}
  ,
  {title: "Wireless Web Development",  id: "wr9hQUDzaXEC",  publisher: "Apress", publishedDate: "2002-07-31", description: "Wireless Web Development, Second Edition provides …wireless technologies and development strategies."}
  ,
  {title: "Node Web Development, Second Edition",  id: "sZYJ0zhgn-wC", publisher: "Packt Publishing Ltd", publishedDate: "2013-07-19", description: "Presented in a simple, step-by-step format, this b…ng of JavaScript and web application development."}
  ,
  {title: "Open Source Web Development with LAMP",  id: "HbUhv8aKIk4C", subtitle: "Using Linux, Apache, MySQL, Perl, and PHP",  publisher: "Addison-Wesley Professional", publishedDate: "2003"}
  ,
  {title: "HTML5 Boilerplate Web Development",  id: "aaHXYmZLYNQC",  publisher: "Packt Publishing Ltd", publishedDate: "2012-11-21", description: "HTML5 Boilerplate Web Development is a practical…s no expectation that you know HTML5 Boilerplate."}
  ,
  {title: "Human Factors and Web Development",  id: "sKvi5fVL-uAC",  publisher: "CRC Press", publishedDate: "2002-08-01", description: "Due to the ever-changing technological landscape a…applications or other topics in the coming years."}
]

//books.forEach (book => book.shelf = "none")


books.forEach((item) => {
   item.shelf =  myReads.find((book) => book.id === item.id) ?  myReads.find((book) => book.id === item.id).shelf : "none"
});


//const myReadsMap = _.keyBy(myReads, "id")
//books.forEach((book) => myReadsMap[book.id] && (book.shelf = myReadsMap[book.id].shelf))

//const booksMap = _.keyBy(books, "id")
//myReads.forEach((book) => booksMap[book.id] && (book.shelf = booksMap[book.id].shelf))

//books.forEach (book => console.log(book.shelf))

//var resutls = _.intersectionBy(books, myReads, "id")

{/*
for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < myReads.length; j++) {
        if (books[i].id === myReads[j].id) {
          books[i].shelf = myReads[j].shelf
          console.log("The same book**********")
          console.log(books[i].shelf)
        }
        //else {
          //books[i].shelf = "none"
      //  }
    }
}

console.log(books)
*/}
//console.log("myReads Length:" + myReads.length)
//myReads.forEach (read => console.log(read.shelf))
//console.log("books Length:" + books.length)
//books.forEach (book => console.log(book.shelf))

//books.forEach((item) => {
   //item.shelf =  myReads.find(item) ?  myReads.find((book) => book.id === item.id).shelf : "none"
  // item.shelf =  myReads.find((book) => book.id === item.id) ?  myReads.find((book) => book.id === item.id).shelf : "none"
//});

books.forEach (book => console.log(book.shelf))

//books.forEach((item) => {
//console.log(myReads.find((book) => book.id === item.id))
//});

//console.log ("after the fact")
//books.forEach (book => console.log(book.shelf))
//books.map(book => (
  //       myReads.find(l => l.id = book.id ? (book.shelf = l.shelf) : (book.shelf = "none"))))
         //console.log("inside updateQuery")
          //console.log(this.props.myReads.find(l => l.id = book.id) )
    //   )}
//console.log(resutls)

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

//res2.forEach((item) => {
//  item.name = res1.find((person) => person.id === item.id).name
//});

//res1.forEach((item) => {
//  item.name = res2.find((person) => person.id === item.id).name
//});

//const res1Map = _.keyBy(res1, 'id');
const res2Map = _.keyBy(res2, 'id');
//res2.forEach((o) => res1Map[o.id] && (o.name = res1Map[o.id].name));

res1.forEach((o) => res2Map[o.id] && (o.name = res2Map[o.id].name));

//console.log(res2);

//console.log(res1);
