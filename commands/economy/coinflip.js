module.exports = {
name: "coinflip",
$if: "v4",
aliases: "cf",
usage: "coinflip < heads / tails > < amount >",
code: `
$if[$randomText[w;f;w;f;w;f;w;f;w;f;w;w;w;w;f;f;f;f;f;f;f;f;w;w;w;w]==w]

$getServerVar[check] **$username** You have chosen $message[1]
$editIn[5s;$getServerVar[check] **$username** You won your bet $numberSeparator[$message[2];,]$getServerVar[symbol]]

$setUserVar[cash;$sum[$getUserVar[cash];$message[2]]]



$else
$getServerVar[check] **$username** You have chosen $message[1]
$editIn[5s;$getServerVar[error] **$username** You lost your bet $numberSeparator[$message[2];,]$getServerVar[symbol]]

$setUserVar[cash;$sub[$getUserVar[cash];$message[2]]]
$endif

$onlyIf[$getUserVar[cash]>=$multi[1;$message[2]];$getServerVar[error] **$username** You don't have that many credits]
$onlyIf[$toLowerCase[$checkContains[$message[1];heads;tails;head;tail;h;t]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < heads/tails > < amount >\`\`\`]
$onlyIf[$isNumber[$message[2]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You don't have a casino]

$suppressErrors[$getservervar[error] **$username** Wrong usage]`}