module.exports = {
name: "viewunlock",
code: `
$modifyChannelPerms[$guildid;$get[id];+viewchannel]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188>  Succesfully unlocked viewing <#$get[id]>**]

$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channels](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage channels](https://top.gg/bot/$clientid) permission**}}]`}