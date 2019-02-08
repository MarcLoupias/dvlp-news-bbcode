'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const marked_renderer_bbcode_impl_1 = require("./marked-renderer-bbcode-impl");
const targetDocumentFileExtension = '.bbcode';
const markedRenderer = Object.assign(new marked.Renderer(), { ...marked_renderer_bbcode_impl_1.default });
const markedOptions = {
    renderer: markedRenderer,
    smartypants: true,
    gfm: true,
    breaks: true
};
class MapToBBCodeImplPkg {
    constructor() {
        this.markedOptions = markedOptions;
        this.targetDocumentFileExtension = targetDocumentFileExtension;
    }
}
exports.default = new MapToBBCodeImplPkg();
