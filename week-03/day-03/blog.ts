'use strict';
export {};

import {BlogPost} from "./blog-post";

class Blog {
  blogposts: BlogPost[] = [];
  
  add(blogpost: BlogPost) {
    this.blogposts.push(blogpost);
  }

  delete(int) {
    this.blogposts.splice(int, 1);
  }

  update(int, BlogPost) {
    this.blogposts.splice(int, 1, BlogPost);
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

let greenFoxBlog = new Blog();

let greenFoxNews = new BlogPost('Junior Developer Course');
greenFoxNews.addAuthor('Green Fox');
greenFoxNews.addText('Next course: 30 July');
greenFoxNews.addDate('17 June');

greenFoxBlog.add(loremIps);
greenFoxBlog.add(waitButWhy);
greenFoxBlog.add(oneEng);
console.log(`The original blogposts:`);
console.log(greenFoxBlog.blogposts);
console.log(`--------------------------`);
greenFoxBlog.delete(1);
greenFoxBlog.update(1, greenFoxNews);
console.log(`The blogposts after deleting and updating:`);
console.log(greenFoxBlog.blogposts);
