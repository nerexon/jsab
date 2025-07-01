import { Application, HtmlDocument } from '../src/index';

const homePage = new HtmlDocument('Home')
    .setTitle("JSAB - Home");
const aboutPage = new HtmlDocument('About')
    .setTitle("JSAB - About");

const app = new Application('MyWebsite')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('test/out');