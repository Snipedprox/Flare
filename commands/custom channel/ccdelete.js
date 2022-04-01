module.exports = {
name: "ccdelete",
$if: "v4",
code: `
$deleteChannel[$channelID]
$wait[3s]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188>  Im deleting the channel**]

$setUserVar[camount;0]

$onlyIf[$getUserVar[camount]==1;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont own a custom channel**}}]


$onlyIf[$channelID==$getUserVar[cid;$authorid];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont own this custom channel**}}]`}