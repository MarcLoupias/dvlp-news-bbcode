'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function codeFn(code) {
    return `[code]\n${code}\n[/code]\n`;
}
function blockquoteFn(quote) {
    return `[quote]\n${quote}\n[/quote]\n`;
}
function htmlFn(html) {
    return html;
}
function headingFn(text, level) {
    return `[SIZE=${level}]${text}[/SIZE]\n\n`;
}
function hrFn() {
    return '[hr]\n';
}
function listFn(body, ordered) {
    return (ordered) ? `[list=1]\n${body}[/list]\n` : `[list]\n${body}[/list]\n\n`;
}
function listitemFn(text) {
    return `[*]${text}\n`;
}
function paragraphFn(text) {
    return `${text}\n\n`;
}
function tableFn(header, body) {
    return `[table]\n${header}${body}[/table]\n`;
}
function tablerowFn(content) {
    return `[tr]\n${content}[/tr]\n`;
}
function tablecellFn(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = (flags.align) ? `[${type} align=${flags.align}]` : `[${type}]`;
    return `${tag}${content}[/${type}]\n`;
}
function strongFn(text) {
    return `[b]${text}[/b]`;
}
function emFn(text) {
    return `[i]${text}[/i]`;
}
function codespanFn(text) {
    return `[C]${text}[/C]`;
}
function brFn() {
    return '\n';
}
function delFn(text) {
    return `[s]${text}[/s]`;
}
function linkFn(href, title, text) {
    const bbCodeHref = href.substring(0, href.length - 2) + 'bbcode';
    return `[url=${bbCodeHref}]${text}[/url]`;
}
function imageFn(href) {
    return `[img=${href}]`;
}
function textFn(text) {
    return text;
}
exports.default = {
    code: codeFn,
    blockquote: blockquoteFn,
    html: htmlFn,
    heading: headingFn,
    hr: hrFn,
    list: listFn,
    listitem: listitemFn,
    paragraph: paragraphFn,
    table: tableFn,
    tablerow: tablerowFn,
    tablecell: tablecellFn,
    strong: strongFn,
    em: emFn,
    codespan: codespanFn,
    br: brFn,
    del: delFn,
    link: linkFn,
    image: imageFn,
    text: textFn
};
