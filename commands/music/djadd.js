module.exports = {
name: "djadd",
$if: "v4",
code: `
  $description[1;<:checkmark:953987845696135188> **Succesfully added <@$mentioned[1]> to the dj team**]

$color[1;$getServerVar[color]]
$giveRoles[$guildid;$mentioned[1];$getServerVar[djrole]]

$onlyIf[$mentioned[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user]\`**}}]

 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$getServerVar[djrole]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **My role is not higher than the DJ role**}}]

$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **DJ role has not been set yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]
`}