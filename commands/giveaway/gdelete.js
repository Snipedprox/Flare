module.exports ={
name: "gdelete",
aliases: "gdel",
usage: "gdelete < messageID >",
code: `
$Gdelete[$message[1]]
$getServerVar[check]**$username** Giveaway has been deleted
$onlyif[$isGiveaway[$message[1]]==true;$getServerVar[error] **$username** That is not a real giveaway]

$onlyIf[$messageexists[$message[1]]==true;$getServerVar[error] **$username** You provided an invalid message ID]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]
$argscheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < messageid >\`\`\`]
`}