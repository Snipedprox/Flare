module.exports = {
name: "accept",
aliases: "approve",
code: `
$giveRoles[$guildID;$findMember[$message[2];no];$getServerVar[brole]]
$giveRoles[$guildID;$findMember[$message[1];no];$getServerVar[arole]]

$channelSendMessage[$getServerVar[botLog];<@$findMember[$message[1];no]> **Your bot <@$findMember[$message[2];no]> has been accepted**;no]

$argscheck[2;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID] [botID]\`**}}]

$onlyIf[$memberExists[$message[1]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID] [botID]\`**}}]

$onlyIf[$memberExists[$message[2]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID] [botID]\` ( bot isnt invited yet )**}}]

$onlyIf[$isbot[$message[2]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID] [botID]\`**}}]

$onlyIf[$getServerVar[arole]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Accepted role has not been set yet**}}]


$onlyIf[$getServerVar[brole]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Bot role has not been set yet**}}]


$onlyIf[$getServerVar[botLog]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Bot log has not been setupped yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}