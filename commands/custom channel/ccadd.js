module.exports = {
name: "ccadd",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:addition:954081541569511474> Succesfully allowed $usertag[$get[u]] to the channel**]

$modifyChannelPerms[$get[u];$get[id];+viewchannel;+managemessages;+readmessagehistory;+attachfiles;+embedlinks]

$onlyIf[$get[u]!=$authorid;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID / botID]\`**}}]

$let[u;$findUser[$message;yes]]
$let[id;$channelID]
$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [userID / botID]\`**}}]

$onlyIf[$channelID==$getUserVar[cid;$authorid];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont own this custom channel**}}]`}