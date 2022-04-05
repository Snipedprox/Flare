module.exports = {
name: "role-income",
code: `
$setServerVar[rincome$message[1];$get[id]]
$setServerVar[princome$message[1];$message[3]]


$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Income role set
<a:D_Loading1:954025328718798898> Role: \`$rolename[$get[id]]\`
<a:D_Loading1:954025328718798898> Index: \`$message[1]\`
<a:D_Loading1:954025328718798898> Amount: $numberSeparator[$message[3];,]$getServerVar[symbol]**]




$onlyIf[$roleExists[$get[id]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **That role doesnt exist**}}]

$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [Index] [@Role] [amount]\`**}}]





$let[id;$findRole[$message[2]]]




$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]`}