import { Application, FooterElement, HeaderElement, HtmlDocument, MainElement } from '../src/index';

const homePage = new HtmlDocument('Home')
    .setTitle("JSAB - Home");
const aboutPage = new HtmlDocument('About')
    .setTitle("JSAB - About");

homePage.body
    .addElement(
        new HeaderElement
    )
    .addElement(
        new MainElement
    )
    .addElement(
        new FooterElement
    )

aboutPage.body
    .addElement(
        new HeaderElement
    )
    .addElement(
        new MainElement
    )
    .addElement(
        new FooterElement
    )

const app = new Application('MyWebsite')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('test/out');