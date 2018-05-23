'use strict';
export{};

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
  
  constructor (blogTitle: string) {
    this.title = blogTitle;
  }

  addAuthor(newAuthor: string) {
    this.authorName = newAuthor;  
  }

  addText(newText: string) {
    this.text = newText;  
  }

  addDate(date: string) {
    this.publicationDate = date;  
  }
}

let loremIps = new BlogPost('Lorem Ipsum');
let waitButWhy = new BlogPost('Wait but why');
let oneEng = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trump');
loremIps.addAuthor('John Doe');
loremIps.addText('Lorem ipsum dolor sit amet.');
loremIps.addDate('2000.05.04.');
waitButWhy.addAuthor('Tim Urban');
waitButWhy.addText('A popular long-form, stick-figure-illustrated blog about almost everything.');
waitButWhy.addDate('2010.10.10.');
oneEng.addAuthor('William Turton');
oneEng.addText('Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');
oneEng.addDate('2017.03.28.');

console.log(loremIps);
console.log(waitButWhy);
console.log(oneEng);
