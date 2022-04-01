module.exports = {
name: "role",
$if: "v4",
code: `
$giveRole[$guildID;$get[u];$get[id]]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Succesfully gave $usertag[$get[u]] the role \`$rolename[$get[id]]\`**]

$onlyIf[$hasRoles[$guildID;$get[u];$get[id]]==false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They already have that role**}}]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user] [@role]\`**}}]

$let[id;$findRole[$message[2]]]
$let[u;$findMember[$message[1];yes]]`}