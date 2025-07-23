# JSAB - JavaScript Application Builder

JSAB (Javascript Application Builder) is a JavaScript/TypeScript library for programmatically creating and building HTML documents. It provides a simple and intuitive way to construct web pages using a fluent API, without writing HTML directly. This approach is ideal for developers who want to generate static websites, build web applications with a strong focus on structure and content, or automate the creation of web content.

## Core Concepts

The library is built around a few core concepts:

*   **Application:** The main container for your website. It holds all the HTML documents (pages) and provides a method to build the final output.
*   **HtmlDocument:** Represents a single HTML page. It has a `head` and a `body` and can be customized with a title and other metadata.
*   **Elements:** The building blocks of your web pages. Elements are TypeScript classes that correspond to HTML tags (e.g., `H1Element`, `PElement`, `DivElement`). They can be nested to create complex layouts and structures.

## Getting Started

To use JSAB, you first need to create an `Application` instance. Then, you can create `HtmlDocument` objects for each page of your website. Finally, you can add elements to the body of each document to build the content.

Here is a simple example of how to create a website with two pages:

```typescript
import { Application, H1Element, HtmlDocument, PElement } from 'jsab';

const homePage = new HtmlDocument('Home')
    .setTitle("Hello World - Home");
const aboutPage = new HtmlDocument('About')
    .setTitle("Hello World - About");

homePage.body
    .addElement(
        new H1Element()
        .addText("Welcome to our Website!")
    )
    .addElement(
        new PElement()
        .addText("This is the home page.")
    );

aboutPage.body
    .addElement(
        new H1Element()
        .addText("About Us")
    )
    .addElement(
        new PElement()
        .addText("This is the about page.")
    );

const app = new Application('Hello World Website')
    .addHtmlDocument(homePage)
    .addHtmlDocument(aboutPage);

app.build('dist');
```

This code will generate a website with two HTML files, `Home.html` and `About.html`, in the `dist` directory.

## Elements

JSAB provides a variety of elements to structure and format your web pages. Here is a list of the available elements and how to use them:

### Container Elements

Container elements are used to group other elements together and create the layout of your page.

*   **`BodyElement`:** The main content of the HTML document. It is automatically created when you create an `HtmlDocument`.
*   **`DivElement`:** A generic container for flow content. It can be used to group elements for styling or to create logical sections.

    ```typescript
    new DivElement()
        .addElement(new PElement().addText("This is a paragraph inside a div."))
        .addElement(new PElement().addText("This is another paragraph inside the same div."))
    ```

*   **`FooterElement`:** Represents the footer of a page or section.

    ```typescript
    new FooterElement()
        .addElement(new PElement().addText("Copyright 2025 My Website"))
    ```

*   **`HeadElement`:** Contains machine-readable information (metadata) about the document. It is automatically created when you create an `HtmlDocument`.
*   **`HeaderElement`:** Represents the header of a page or section.

    ```typescript
    new HeaderElement()
        .addElement(new H1Element().addText("This is the main heading"))
    ```

*   **`MainElement`:** Represents the main content of the `<body>` of a document.

    ```typescript
    new MainElement()
        .addElement(new PElement().addText("This is the main content of the page."))
    ```

### Text Elements

Text elements are used to add and format text content.

*   **`H1Element`:** Represents a level 1 heading.
Heading from level 1 to level 6 are supported.

    ```typescript
    new H1Element().addText("This is a top-level heading")
    ```

*   **`PElement`:** Represents a paragraph.

    ```typescript
    new PElement().addText("This is a paragraph of text.")
    ```

*   **`AElement`:** Represents a hyperlink.

    ```typescript
    new AElement()
        .addText("Visit Google")
        .addAttribute(new HrefAttribute().setHref("https://www.google.com"));
    ```

*   **`BElement`:** Represents a section of text to be rendered in bold.

    ```typescript
    new BElement().addText("This text will be bold.")
    ```

*   **`IElement`:** Represents a section of text to be rendered in italic.

    ```typescript
    new IElement().addText("This text will be italic.")
    ```

### Other Elements

*   **`TitleElement`:** Represents the title of the HTML document. It is set via the `setTitle` method on the `HtmlDocument` instance.

    ```typescript
    const homePage = new HtmlDocument('Home')
        .setTitle("My Website - Home");
    ```

## Attributes

Elements can have attributes that provide additional information. Here are the currently supported attributes:

*   **`IdAttribute`:** Represents the `id` attribute, which specifies a unique ID for an HTML element.

    ```typescript
    import { IdAttribute } from "jsab";

    new DivElement()
        .addAttribute(new IdAttribute().setId("myUniqueDiv"));
    ```

*   **`HrefAttribute`:** Represents the `href` attribute, which specifies the URL of the page the link goes to. This is typically used with `AElement`.

    ```typescript
    import { AElement, HrefAttribute } from "jsab";

    new AElement()
        .addText("Go to Example")
        .addAttribute(new HrefAttribute().setHref("https://www.example.com"));
    ```

*   **`ClassAttribute`:** Represents the `class` attribute, which specifies one or more class names for an element.

    ```typescript
    import { ClassAttribute } from "jsab";

    new DivElement()
        .addAttribute(new ClassAttribute().addClass("my-class"));
    ```

## License

This project is licensed under the ISC License. See the [LICENSE.md](LICENSE.md) file for more details.

## Copyright and Development

This project is copyrighted by **Nerexon** and developed by **Alataq**.

*   **Copyright © 2025 Nerexon**
*   **Developed by Alataq**
