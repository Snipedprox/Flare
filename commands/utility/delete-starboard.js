module.exports = {
name: "delete-starboard",
$if: "v4",
aliases: ['dsb','deletestarboard'],
code: `
⭐ **Starboard message deleted**
$deletemessage[$message]



$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [messageID]\`**}}]


$onlyIf[$messageexists[$message]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Message id is invalid**}}]


$onlyIf[$getServerVar[schannel]!=;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Starboard channel has not been set yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Ia m missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]`}