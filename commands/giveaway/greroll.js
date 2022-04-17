module.exports ={
name: "greroll",
aliases: ['grerrol','reroll','rerol','rerrol','rerroll'],
usage: "greroll < messageID > < winners >",
code: `
$Greroll[$message[1];$message[2]]

$getServerVar[check] **$username** Giveaway rerolled
$onlyif[$isGiveaway[$message[1]]==true;$getServerVar[error] **$username** That is not a real giveaway]
$onlyIf[$isnumber[$message[2]]==true;$getServerVar[error] **$username** You provied an invalid number for the winners count]
$onlyIf[$messageexists[$message[1]]==true;$getServerVar[error] **$username** You provided an invalid message ID]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]
$argscheck[2;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < messageid > < winners >\`\`\`]
`}



