module.exports = {
name: "calc",
aliases: ['math','calculate','calculator'],
code: `
**Math problem**
\`\`\`js
$message\`\`\`

**Solution**
\`\`\`
Abbreviated: $abbreviate[$round[$math[$message]]]
Truncated: $truncate[$math[$message]]
Seperated: $numberSeparator[$math[$message];,]
Actual result: $math[$message]\`\`\`

$argsCheck[>0;$getServerVar[error] **Correct usage**
\`\`\`js
$getservervar[prefix]$commandname < math problem >\`\`\`]

$onlyIf[$checkContains[$message;+;-;*;/;%;^;1;2;3;4;5;6;7;8;9;0]==true;**$getServerVar[error] $username Invalid math problem**]
$suppressErrors`}