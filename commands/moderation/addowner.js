module.exports = {
name: "addqotd",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Succesfully added \`$usertag[$mentioned[1]]\` to the co owner team**]


$giveRoles[$guildid;$mentioned[1];$getServerVar[ownerole]]

$onlyIf[$mentioned[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user]\`**}}]

 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$getServerVar[ownerole]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **My role needs to be higher than the owner role**}}]

$onlyIf[$getServerVar[ownerole]!={NONE};{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Owner role has not been setup yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]
`}