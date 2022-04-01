module.exports = {
name: "remove-level",
$if: "v4",
aliases: "removelevel",
code: `
**<:DiscordBotMaker:955637250518056971> Successfully removed $numberSeparator[$message[1];,] levels from <@$get[u]>**
$setUserVar[level;$sub[$getUserVar[level;$get[u]];$message[1]];$get[u]]

$let[u;$findMember[$message[2];yes]]

$onlyIf[$getUserVar[level;$findMember[$message[2];yes]]<0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You cant remove levels from users with 0 levels**}}]

$cooldown[2m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$findMember[$message[2];yes]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [amount] (user)\`**}}]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}