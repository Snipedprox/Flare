module.exports = {
name: "ccpurge",
aliases: "ccmsg",
usage: "ccpurge < amount >",
code: `
$author[1;Purging messages;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully purged $message messages]

$clear[$message]



$onlyIf[$message<101;$getServerVar[error]**$username** You can't delete more than **100** messages]

$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]

$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error]**$username** You are not the creator of this channel]
`}