module.exports = {
name: "mdecline",
code: `
$deletecommand 

**<:xelaheartbroken:952137231534014484>  $username Has rejected $username[$mentioned[1]]** ( because: $nomentionmessage )**

$setGlobalUserVar[marry;single;$authorID]
$setGlobalUserVar[marry;single;$mentioned[1]]

$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[reject;$sum[$getGlobalUserVar[reject;$mentioned[1]];1];$mentioned[1]]
$setGlobalUserVar[rejector;$sum[$getGlobalUserVar[rejector;$authorID];1];$authorID]



$onlyIf[$getGlobalUserVar[accept;$authorID]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant reject somebody you asked**}}]
$onlyIf[$noMentionMessage!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user] [reason]\`**}}]
$onlyIf[$authorID!=$mentioned[1];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cannot reject yourself**}}]
$onlyIf[$mentioned[1]!=;Please mention someone to decline marriage to!]
$onlyIf[$getGlobalUserVar[waiting;$authorID]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant reject anybody at the moment**}}]
$onlyIf[$getGlobalUserVar[waiting;$mentioned[1]]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Ask someone to marry you or marry somebody then break their heart 💔**}}]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are already married**}}]`}