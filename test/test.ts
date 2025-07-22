import { Application, DivElement, FooterElement, H1Element, HeaderElement, HtmlDocument, MainElement, PElement, AElement, HrefAttribute, BElement, IElement, IdAttribute, ClassAttribute } from '../src/index';

const homePage = new HtmlDocument('Home')
    .setTitle("JSAB - Home");
const aboutPage = new HtmlDocument('About')
    .setTitle("JSAB - About");

homePage.body
    .addElement(
        new HeaderElement()
            .addAttribute(
                new IdAttribute().setId("home-header")
            )
            .addAttribute(
                new ClassAttribute().addClass("text-center")
            )
            .addElement(
                new H1Element()
                    .addAttribute(
                        new IdAttribute().setId("home-h1")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("text-4xl", "font-bold")
                    )
                    .addText("Welcome to JSAB - Javascript Application Builder")
            )
    )
    .addElement(
        new MainElement()
            .addAttribute(
                new IdAttribute().setId("home-main")
            )
            .addAttribute(
                new ClassAttribute().addClass("container")
            )
            .addElement(
                new DivElement()
                    .addAttribute(
                        new IdAttribute().setId("home-div-1")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("p-4", "m-4", "border")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("home-p-1")
                            )
                            .addText("This is a paragraph on the home page, demonstrating the use of PElement.")
                            .addText("It supports multiple text children and other formatting elements.")
                    )
            )
            .addElement(
                new DivElement()
                    .addAttribute(
                        new IdAttribute().setId("home-div-2")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("p-4", "m-4", "border")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("home-p-2")
                            )
                            .addText("You can add more content and structure here using other elements.")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("home-p-3")
                            )
                            .addText("Here is another paragraph to make the div element more noticeable.")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("home-p-4")
                            )
                            .addText("This paragraph contains a")
                            .addText(new BElement().addText("bold text"))
                            .addText("and an")
                            .addText(new IElement().addText("italic text"))
                            .addText("to show how text formatting elements can be nested.")
                    )
                    .addElement(
                        new AElement()
                            .addAttribute(
                                new HrefAttribute().setHref("about.html")
                            )
                            .addAttribute(
                                new ClassAttribute().addClass("text-blue-500")
                            )
                            .addText("Go to About Page")
                    )
            )
    )
    .addElement(
        new FooterElement()
            .addAttribute(
                new IdAttribute().setId("home-footer")
            )
            .addAttribute(
                new ClassAttribute().addClass("text-center")
            )
    );

aboutPage.body
    .addElement(
        new HeaderElement()
            .addAttribute(
                new IdAttribute().setId("about-header")
            )
            .addAttribute(
                new ClassAttribute().addClass("text-center")
            )
            .addElement(
                new H1Element()
                    .addAttribute(
                        new IdAttribute().setId("about-h1")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("text-4xl", "font-bold")
                    )
                    .addText("About the JSAB Project")
            )
    )
    .addElement(
        new MainElement()
            .addAttribute(
                new IdAttribute().setId("about-main")
            )
            .addAttribute(
                new ClassAttribute().addClass("container")
            )
            .addElement(
                new DivElement()
                    .addAttribute(
                        new IdAttribute().setId("about-div-1")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("p-4", "m-4", "border")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("about-p-1")
                            )
                            .addText("This project aims to simplify the process of building web applications with JavaScript.")
                    )
            )
            .addElement(
                new DivElement()
                    .addAttribute(
                        new IdAttribute().setId("about-div-2")
                    )
                    .addAttribute(
                        new ClassAttribute().addClasses("p-4", "m-4", "border")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("about-p-2")
                            )
                            .addText("More details about its features and development will be available soon.")
                    )
                    .addElement(
                        new PElement()
                            .addAttribute(
                                new IdAttribute().setId("about-p-3")
                            )
                            .addText("This additional paragraph on the about page helps to illustrate the containerization by the div element.")
                    )
                    .addElement(
                        new PElement()
                            .addText("This is a paragraph with")
                            .addText(new BElement().addText("bold text with").addText(new IElement().addText("italic text")))
                            .addText("inside.")
                    )
                    .addElement(
                        new AElement()
                            .addAttribute(
                                new HrefAttribute().setHref("home.html")
                            )
                            .addAttribute(
                                new ClassAttribute().addClass("text-blue-500")
                            )
                            .addText("Go to Home Page")
                    )
            )
    )
    .addElement(
        new FooterElement()
            .addAttribute(
                new ClassAttribute().addClass("text-center")
            )
    );

const app = new Application('JSAB Test Website')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('test/out');