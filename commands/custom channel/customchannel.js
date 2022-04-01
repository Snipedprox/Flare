module.exports = {
name: "cc",
code: `
$setUserVar[cid;$get[id]]

$modifyChannelPerms[$authorid;$get[id];+managechannel;+viewchannel;+managemessages;+readmessagehistory;+attachfiles;+embedlinks]

$modifyChannelPerms[$guildid;$get[id];-managechannel;-viewchannel;-managemessages;-readmessagehistory;-attachfiles;-embedlinks]

$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> I have created your custom channel <#$get[id]>**]
$setUserVar[camount;1]

$let[id;$createChannel[$guildID;$username;text;yes;$getServerVar[catid]]]
$onlyIf[$getServerVar[ccallow]==yes;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Custom chanels are not enabled yet**}}]
$onlyIf[$getUserVar[camount]==0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to delete your cusrrent custom channel through command ( not deleting it the normal way )**}}]`}