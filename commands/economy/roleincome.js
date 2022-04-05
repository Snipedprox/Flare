module.exports = {
name: "roleincome",
$if: "v4",
code: `
$setServerVar[r$message[3];$get[id]]
$setServerVar[r$message[3]i;$message[2]]

$author[1;Role income set]
$color[1;$getRoleColor[$get[id]]]
$description[1;<:gifting:949696444015726632> **role income set to <@&$get[id]>, $numberSeparator[$message[2];,]$getServerVar[symbol] income, tier $message[3]**]


$onlyif[$isNumber[$message[3]]!=false;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**That is not a number**}}]

$onlyif[$isNumber[$message[2]]!=false;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**That is not a number**}}]

$onlyIf[$roleexists[$get[id]]!=false;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**That role does not exist**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage roles](https://u.com) permission**}}]

$argsCheck[>2;{newEmbed: {color:$getVar[color]} {author:Missing arguments:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**Mention the role and then the amount and then the tier from 1 - 5**}}]


$let[id;$findRole[$message[1]]]`
}