# dvlp-news-bbcode

An implementation package for [md-file-converter](https://www.npmjs.com/package/md-file-converter).

This implementation output `.bbcode` files in the format expected by [developpez.com website](https://www.developpez.com/) to write news documents.

## installation

In the repository containing your news markdown documents, add this package to devDependencies :

```bash
npm i --save-dev dvlp-news-bbcode
```

## usage

Invoke the CLI with the following :

```bash
node ./node_modules/.bin/mdfc convert 'dvlp-news-bbcode' '<news-markdown-file-path>'
```
