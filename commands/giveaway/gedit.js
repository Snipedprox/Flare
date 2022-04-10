module.exports = {
name: "gedit",
$if: "v4",
aliases: "giveaway-edit",
usage: "gedit < messageID > [winners/time/prize]",
code: `
$if[$message[2]==winners]
$Gedit[$message[1];winners;$message[3]]

$getServerVar[check] **$username** Edited the winners component to \`$message[3]\`

$onlyIf[$isnumber[$message[3]]==true;$getServerVar[error] **$username** You provided an invalid number for winners]
$else
$if[$message[2]==prize]
$Gedit[$message[1];prize;$messageslice[2]]

$getServerVar[check] **$username** Edited the prize component to \`$messageslice[2]\`

$onlyIf[$messageSlice[2]==true;$getServerVar[error] **$username** You need to provide a prize]
$else
$if[$message[2]==time]
$Gedit[$message[1];time;$message[3]]

$getServerVar[check] **$username** Edited the time component to \`$message[3]\`

$onlyIf[$message[3]==true;$getServerVar[error] **$username** You need to provide a time ( \`-\` for removing time or just provide the time without the \`-\` to add more time]
$endif
$endif
$endif


$onlyif[$isGiveaway[$message[1]]==true;$getServerVar[error] **$username** That is not a real giveaway]

$onlyIf[$isActiveGiveaway[$message[1]]==true;$getServerVar[error] **$username** That giveaway has already ended]
$onlyIf[$messageexists[$message[1]]==true;$getServerVar[error] **$username** You provided an invalid message ID]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]
$argscheck[>2;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < messageid > < winners / prize / time >\`\`\`]
$onlyIf[$tolowercase[$checkcontains[$message[2];prize;winners;time]]==true;$getServerVar[error] **$username** You need to provide a valid property \`prize\`,\`winners\`,\`time\`]
`}

