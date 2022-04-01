module.exports = {
name: "cctopic",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:wumpuspencil:954084544712151171> Succesfully changed the channel topic**]

$setChannelTopic[$channelID;$message]
$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [topic]\`**}}]

$onlyIf[$channelID==$getUserVar[cid;$authorid];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont own this custom channel**}}]`}