module.exports = {
name: "abrole",
code: `
$setChannelVar[btn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$setChannelVar[rbtn$message[1];$findRole[$message[2]];$findChannel[$message[3];yes]]
$deletecommand
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Button role set to <@&$findrole[$message[2]]> ( Pos: \`$message[1]\` )**]

$channelSendMessage[$findChannel[$message[3];yes]; {
 "content" : "**$messageSlice[3]**",
 "embeds" : "$messageSlice[3]**",
 "components" : "{actionRow:{button:Click for role:primary:btn$message[1]}{button:Remove role:danger:rbtn$message[1]}}"
 };no]


$onlyIf[$isNumber[$message[1]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Invalid number**}}]

$onlyIf[$channelExists[$findChannel[$message[3]]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Channel is invalid**}}]

$onlyIf[$roleExists[$findRole[$message[2]]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role is invalid**}}]



$onlyIf[$message[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [index] [@role] [#channel] [message]\`
Note: index can be from 1 up to 30**}}]

$argsCheck[>3;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [index] [@role] [#channel] [message]\`
Note: index can be from 1 up to 30**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]`}