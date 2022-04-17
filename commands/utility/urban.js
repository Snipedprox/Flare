module.exports = {
  name: "urban", 
  aliases: ['dictionary'], 
  code: `
$if[$jsonRequest[https://api.eriner.repl.co/search/urban?word=$replaceText[$message; ;+];error]==;
$title[1;$toLocaleUpperCase[$jsonRequest[$get[api];word]];$jsonRequest[$get[api];url]]
$addField[1;**Example**:;
\`\`\`
$get[example]\`\`\`;no]  
$addField[1;**Definition**:;
\`\`\`
$jsonRequest[$get[api];definition]\`\`\`;no] 
$footer[1;📕 | Requested by $nickname[$authorID]] 
$color[1;$getServerVar[color]]
$let[api;https://api.eriner.repl.co/search/urban?word=$replaceText[$message; ;+]];


$if[$jsonRequest[https://api.eriner.repl.co/search/urban?word=$replaceText[$message; ;+];example]==;
$let[example;Not found.];
$let[example;$jsonRequest[https://api.eriner.repl.co/search/urban?word=$replaceText[$message; ;+];example]]]`
}