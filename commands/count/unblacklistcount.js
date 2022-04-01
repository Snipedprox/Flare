module.exports = {
name: "unblacklistcount",
code: `
$setUserVar[countblacklist;false;$get[u]]
$color[1;$getservervar[color]]
$description[1;**<:blacklist:954025323740143626> Unblacklisted <@$get[u]> from counting**]



$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$getServerVar[countchannel]!=0;*{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Counting channel has not been setupped yet**}}]

$onlyIf[$get[u]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [member]\`**}}]

$let[u;$findMember[$message;yes]]`}