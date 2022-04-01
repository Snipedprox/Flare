module.exports = {
name: "remove-ticket",
$if: "v4",
code: `
**<:M_ticket:957022854069755904> Removed $usertag[$get[u]] from the ticket**

$modifyChannelPerms[$get[u];$get[id];-viewchannel;-attachfiles;-embedlinks]

$onlyIf[$get[u]!=$authorid;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userid]\`**}}]

$let[u;$findUser[$message;yes]]
$let[id;$channelID]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userid]\`**}}]

$onlyIf[$getChannelVar[ticket]!=$channelID;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are not the ticket creator**}}]`}