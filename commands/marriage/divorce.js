module.exports = {
name: "divorce",
code: `**<:xelaheartbroken:952137231534014484>  $username has divorced <@$mentioned[1]> ( because: $nomentionmessage )**
$setGlobalUserVar[marry;single;$mentioned[1]]
$setGlobalUserVar[marry;single;$authorID]
$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[divorced;$sum[$getGlobalUserVar[divorced;$mentioned[1]];1];$mentioned[1]]
$setGlobalUserVar[divorced;$sum[$getGlobalUserVar[divorced;$authorID];1];$authorID]

$setGlobalUserVar[accept;0;$authorID]
$onlyIf[$authorID!=$mentioned[1];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant divorce yourself*}}]
$onlyIf[$noMentionMessage!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user] [reason]\`**}}]
$onlyIf[$getGlobalUserVar[marry;$authorID]==married;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are not married**}}]
$onlyIf[$getGlobalUserVar[marry;$mentioned[1]]==married;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They arent married**}}]`}