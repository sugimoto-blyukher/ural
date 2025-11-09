import '../css/style.css';
import $ from 'jquery';
import './header.js';
import { marked } from 'marked';


document.getElementById('content').innerHTML = 
  marked.parse('# Test in the browser\n\nRendered by **marked**.');




/*
const {
  positionals
} = Utils.parseArgs({
  allowPositionals: true,
});

const filePath = positionals[0];
fs.readFile(filePath, {encoding: "utf8"}).then(file => {
  //Markdownファイルをhtml形式に変換する
  const html = marked.parse(file);
  console.log(html);
}).catch(err => {
  console.error(err.massage);
  process.exit(1);
});
*/
$(function () {
});
