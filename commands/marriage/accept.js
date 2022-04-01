module.exports = {
name: "maccept",
code: `

**<a:1279_Flying_Hearts_Red:954040182905131038> $username and $username[$mentioned[1]] Are now married Congrats to them!**

$setGlobalUserVar[marry;married;$authorID]
$setGlobalUserVar[marry;married;$mentioned[1]]
$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[accept;0;$authorID]
$setGlobalUserVar[mar;$username;$mentioned[1]]
$setGlobalUserVar[mar;$username[$mentioned[1]];$authorID]

$onlyIf[$mentioned[1]!={newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user]\`**}}]
$onlyIf[$getGlobalUserVar[accept;$authorID]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant accept a user you asked**}}]
$onlyIf[$authorID!=$mentioned[1];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant accept yourself into someones life**}}]
$onlyIf[$getGlobalUserVar[waiting;$authorID]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to ask somebody to marry you**}}]
$onlyIf[$getGlobalUserVar[waiting;$mentioned[1]]>0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to ask somebody to marry you**}}]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are are already married**}}]`}