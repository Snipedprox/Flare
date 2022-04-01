module.exports = {
  name: "addemoji",
  aliases: "add",
  code: `
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188>  Successfully added the emoji to the server  $get[emote]**]


$let[emote;$addemoji[$guildid;$message[1];$message[2];yes]]



$onlyIf[$charCount[$message[1]]>=1;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [image link] [name]\`**}}]
$onlyIf[$charCount[$message[2]]>=1;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [image link] [name]\`**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageemojisandstickers]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage emojis](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;manageemojisandstickers]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage emojis](https://top.gg/bot/$clientid) permission**}}]
`
}