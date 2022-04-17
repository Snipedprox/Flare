module.exports = {
name: "cc",
aliases: "cccreate",
usage: "cc",
code: `
$setUserVar[cid;$get[id]]

$modifyChannelPerms[$authorid;$get[id];+managechannel;+viewchannel;+managemessages;+readmessagehistory;+attachfiles;+embedlinks]

$modifyChannelPerms[$guildid;$get[id];-managechannel;-viewchannel;-managemessages;-readmessagehistory;-attachfiles;-embedlinks]

$author[1;Custom channel;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**I have created your custom channel <#$get[id]>]
$setUserVar[camount;1]

$let[id;$createChannel[$guildID;$username;text;yes;$getServerVar[catid]]]
$onlyIf[$getServerVar[ccallow]==yes;$getServerVar[error] **$username** Custom channels are not enabled yet]
$onlyIf[$getUserVar[camount]==0;$getServerVar[error] **$username** You already own a **custom channel**]`}