"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlDocument = exports.BaseDocument = exports.Application = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const baseDocument_1 = require("./document/baseDocument");
Object.defineProperty(exports, "BaseDocument", { enumerable: true, get: function () { return baseDocument_1.BaseDocument; } });
const htmlDocument_1 = require("./document/htmlDocument");
Object.defineProperty(exports, "HtmlDocument", { enumerable: true, get: function () { return htmlDocument_1.HtmlDocument; } });
class Application {
    name;
    htmlDocuments;
    constructor(name) {
        this.name = name;
        this.htmlDocuments = [];
    }
    addHtmlDocument(document) {
        this.htmlDocuments.push(document);
        return this;
    }
    build(outputDir = 'dist') {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        this.htmlDocuments.forEach(doc => {
            const content = doc.build();
            const filePath = path.join(outputDir, `${doc.name}.html`);
            fs.writeFileSync(filePath, content);
        });
    }
}
exports.Application = Application;
