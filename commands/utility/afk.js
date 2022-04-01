module.exports = {
name: "afk",
$if: "v4",
code: `
$if[$authorid==$ownerid]
$color[1;$getservervar[color]]
$description[1;<a:M_afk:954098345645862922> **I have set you to AFK
reason: $message**]
$setUserVar[afk;true]
$setUserVar[afkt;$dateStamp]
$setUserVar[afkr;$message]
$else

$color[1;$getservervar[color]]
$description[1;<a:M_afk:954098345645862922> **I have set you to AFK
reason: $message**]
$setUserVar[afk;true]
$setUserVar[afkt;$dateStamp]
$setUserVar[afkr;$message]
$changenickname[$authorid;(AFK) $username]
$endif


$onlyIf[$getUserVar[afk]==false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are already afk**}}]
$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [reason]\`**}}]

$if[$getServerVar[afkroles]!=undefined]
$onlyForRoles[$joinsplittext[;];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have one of the afk roles**}}]

$textsplit[$getservervar[afkroles];/]
$endif`}