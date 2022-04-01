module.exports = {
name: "afkreason",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<a:M_afk:954098345645862922> Afk reason set:** $message]

$setServerVar[afkr;$message]

$onlyIf[$getUserVar[afk]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are not afk**}}]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [reason]\`**}}]


$if[$getServerVar[afkroles]!=undefined]
$onlyForRoles[$joinsplittext[;];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have oe of the afk roles**}}]

$textsplit[$getservervar[afkroles];/]
$endif`}