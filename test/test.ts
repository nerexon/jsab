import { Application, HtmlDocument } from '../src/index';

const app = new Application('MyWebsite');

const homePage = new HtmlDocument('Home');
const aboutPage = new HtmlDocument('About');

app.addHtmlDocument(homePage);
app.addHtmlDocument(aboutPage);

app.build('./out');
