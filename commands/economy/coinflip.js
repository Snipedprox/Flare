module.exports = {
name: "coinflip",
$if: "v4",
code: `
$if[$randomText[w;f;w;f;w;f;w;f;w;f;w;w;w;w;f;f;f;f;f;f;f;f;w;w;w;w]==w]

**🌟 You have chosen $message[1]**
$editIn[5s;**🌟 You won your bet $numberSeparator[$message[2];,]$getServerVar[symbol]**]

$setUserVar[cash;$sum[$getUserVar[cash];$message[2]]]



$else
**🌟 You have chosen $message[1]**
$editIn[5s;**🌟 You lost your bet $numberSeparator[$message[2];,]$getServerVar[symbol]**]

$setUserVar[cash;$sub[$getUserVar[cash];$message[2]]]
$endif

$onlyIf[$getUserVar[cash]>=$multi[1;$message[2]];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that many credits**}}]
$onlyIf[$toLowerCase[$checkContains[$message[1];heads;tails;head;tail;h;t]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [heads/tails] [bet]\`**}}]
$onlyIf[$isNumber[$message[2]]!=false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You have betted an invalid number**}}]

$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create a casino**}}]`}