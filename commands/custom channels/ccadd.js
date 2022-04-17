module.exports = {
name: "ccadd",
aliases: "chanadd",
usage: "ccadd < userID >",
code: `
$getServerVar[check] **$username** Succesfully added $usertag[$get[u]] to the channel

$modifyChannelPerms[$get[u];$get[id];+viewchannel;+managemessages;+readmessagehistory;+attachfiles;+embedlinks]

$onlyIf[$get[u]!=$authorid;$getServerVar[error] **$username** Invalid **ID**l]

$let[u;$findUser[$message;yes]]
$let[id;$channelID]
$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < ID >\`\`\`]

$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error] **$username** You are not the creator of this channel]

$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}