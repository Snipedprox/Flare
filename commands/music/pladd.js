module.exports = {
  name: "pladd", 
  $if: "v4", 
  code: `
$color[1;$getservervar[color]]
$description[1;<:checkmark:953987845696135188> **Added $messageSlice[1] to position $message[1] in your play list**]
$setGlobalUserVar[p$message[1];$messageSlice[1]]



$onlyIf[$isNumber[$message[1]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Index must be a number**}}]
$argsCheck[>1;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [index] [song name]\`**}}]
$onlyIf[$replaceText[$message[1];-;]<=10;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You can not add more than \`10\` songs**}}]`}