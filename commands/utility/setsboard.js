module.exports = {
name: "setsboard",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Starboard channel been set to <#$findChannel[$message]>**]

$setServerVar[schannel;$findChannel[$message]]



$onlyIf[$channelExists[$findChannel[$message]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Channel is invalid**}}]

$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel]\`**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Ia m missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]`}