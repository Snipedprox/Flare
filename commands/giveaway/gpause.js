module.exports ={
name: "gpause",
aliases: "gstop",
usage: "gpause < messageID >",
code: `
$Gpause[$message[1]]
$getServerVar[check] **$username** Giveaway has been paused
$onlyif[$isGiveaway[$message[1]]==true;$getServerVar[error] **$username** That is not a real giveaway]

$onlyIf[$messageexists[$message[1]]==true;$getServerVar[error] **$username** You provided an invalid message ID]
$onlyIf[$isActiveGiveaway[$message[1]]==false;$getServerVar[error] **$username** The giveaway is stil active]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]
$argscheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < messageid >\`\`\`]
`}
