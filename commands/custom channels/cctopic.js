module.exports = {
name: "cctopic",
aliases: "ctopic",
usage: "cctopic < topic >",
code: `
$author[1;New channel topic;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully changed the channel topic]

$setChannelTopic[$channelID;$message]
$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < topic >\`\`\`]

$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error] **$username** You are not the creator of this channel]`}