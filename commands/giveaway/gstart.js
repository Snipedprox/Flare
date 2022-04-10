module.exports = {
name: "gstart",
aliases: "giveaway",
code: `
$Gstart[$message[1];$message[2];$messageslice[3];$findChannel[$message[3];yes];$authorid]


$onlyIf[$messageSlice[3]!=;$getServerVar[error] **$username** You need to provide a prize]
$onlyIf[$channelExists[$findChannel[$message[3];yes]]==true;$getServerVar[error] **$username** You need to provide a valid channel]
$onlyIf[$tolowercase[$checkcontains[$message[1];1;2;3;4;5;6;7;8;9;0;d;s;m;h]]==true;$getServerVar[error] **$username** You provided an **invalid** duration]
$onlyIf[$isNumber[$message[2]]==true;$getServerVar[error] **$username** You provided an invalid number for the winners count]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]

$argscheck[>3;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < time > < winners > < channel > < prize >\`\`\`]`}
