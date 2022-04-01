module.exports = {
name: "setowner",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Owner role been set to <@&$findRole[$message]>**]

$setServerVar[ownerole;$findRole[$message]]



$onlyIf[$roleExists[$findRole[$message]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role is invalid**}}]

$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@role]\`**}}]

$onlyIf[$authorid==$ownerid;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to be the server owner**}}]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Ia m missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]`}