import { Application, DivElement, FooterElement, H1Element, HeaderElement, HtmlDocument, MainElement, PElement } from '../src/index';

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
        new MainElement()
            .addElement(
                new DivElement()
                    .addElement(
                        new PElement()
                        .addText("This is a paragraph on the home page, demonstrating the use of PElement.")
                        .addText("It supports multiple text children and other formatting elements.")
                    )
            )
            .addElement(
                new DivElement()
                    .addElement(
                        new PElement()
                        .addText("You can add more content and structure here using other elements.")
                    )
                    .addElement(
                        new PElement()
                        .addText("Here is another paragraph to make the div element more noticeable.")
                    )
            )
    )
    .addElement(
        new FooterElement()
    );

aboutPage.body
    .addElement(
        new HeaderElement()
        .addElement(
            new H1Element()
            .addText("About the JSAB Project")
        )
    )
    .addElement(
        new MainElement()
            .addElement(
                new DivElement()
                    .addElement(
                        new PElement()
                        .addText("This project aims to simplify the process of building web applications with JavaScript.")
                    )
            )
            .addElement(
                new DivElement()
                    .addElement(
                        new PElement()
                        .addText("More details about its features and development will be available soon.")
                    )
                    .addElement(
                        new PElement()
                        .addText("This additional paragraph on the about page helps to illustrate the containerization by the div element.")
                    )
            )
    )
    .addElement(
        new FooterElement()
    );

const app = new Application('JSAB Test Website')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('test/out');