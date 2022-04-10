module.exports = {
name: "income-list",
code: `
$getServerVar[check] **$servername's role income list*
$color[1;$getservervar[color]]
$description[1;
\`\`\`js
Current role income list that are set\`\`\`
$if[$getServerVar[rincome1]!=undefined;
**( 1 ) <@&$getServerVar[rincome1]>: $numberSeparator[$getServerVar[princome1];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome2]!=undefined;
**( 2 ) <@&$getServerVar[rincome2]>: $numberSeparator[$getServerVar[princome2];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome3]!=undefined;
**( 3 ) <@&$getServerVar[rincome3]>: $numberSeparator[$getServerVar[princome3];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome4]!=undefined;
**( 4 ) <@&$getServerVar[rincome4]>: $numberSeparator[$getServerVar[princome4];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome5]!=undefined;
**( 5 )  <@&$getServerVar[rincome5]>: $numberSeparator[$getServerVar[princome5];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome6]!=undefined;
**( 6 ) <@&$getServerVar[rincome6]>: $numberSeparator[$getServerVar[princome6];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome7]!=undefined;
**( 7 ) <@&$getServerVar[rincome7]>: $numberSeparator[$getServerVar[princome7];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome8]!=undefined;
**( 8 ) <@&$getServerVar[rincome8]>: $numberSeparator[$getServerVar[princome8];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome9]!=undefined;
**( 9 ) <@&$getServerVar[rincome9]>: $numberSeparator[$getServerVar[princome9];,]$getServerVar[symbol]**]
$if[$getServerVar[rincome10]!=undefined;
**( 10 ) <@&$getServerVar[rincome10]>: $numberSeparator[$getServerVar[princome10];,]$getServerVar[symbol]**]]


`}