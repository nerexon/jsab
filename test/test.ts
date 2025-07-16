import { Application, FooterElement, H1Element, HeaderElement, HtmlDocument, MainElement } from '../src/index';

const homePage = new HtmlDocument('Home')
    .setTitle("JSAB - Home");
const aboutPage = new HtmlDocument('About')
    .setTitle("JSAB - About");

homePage.body
    .addElement(
        new HeaderElement()
        .addElement(
            new H1Element()
            .addText("Welcome to JSAB - Javascript Application Builder")
        )
    )
    .addElement(
        new MainElement
    )
    .addElement(
        new FooterElement
    )

aboutPage.body
    .addElement(
        new HeaderElement()
        .addElement(
            new H1Element()
            .addText("About the JSAB Project")
        )
    )
    .addElement(
        new MainElement
    )
    .addElement(
        new FooterElement
    )

const app = new Application('JSAB Test Website')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('test/out');