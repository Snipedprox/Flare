module.exports = {
name: "decline",
code: `
$channelSendMessage[$getServerVar[botLog];<@$findMember[$message[1];no]> {newEmbed: {description:**
Your bot \`$usertag[$getuservar[clientid;$findMember[$message[1];no]]]\` has been declined
Reason: $messageSlice[1]**} {color:$getServerVar[color]}};no]


$argscheck[>2;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID] [reason]\`**}}]

$onlyIf[$memberExists[$message[1]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **That member doesnt exist**}}]
$onlyIf[$getServerVar[arole]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Accepted role has not been set yet**}}]


$onlyIf[$getServerVar[brole]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Bot role has not been set yet**}}]


$onlyIf[$getServerVar[botLog]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Bot log has not been setupped yet**}}]



$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}