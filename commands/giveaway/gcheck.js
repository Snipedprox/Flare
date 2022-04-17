module.exports ={
name: "gcheck",
aliases: "giveaway-check",
usage: "gcheck < messageID >",
code: `

**$username** That giveaway is $replaceText[$replaceText[$isGiveaway[$message];true;$getservervar[chec] real];false;$getServerVar[error] fake]

$onlyIf[$message!=;$getServerVar[error] **$username** You need to specify a message ID]
$onlyIf[$messageexists[$message]!=false;$getServerVar[error] **$username** You need to specify a **valid** message ID]
$onlyPerms[managemessages;$getServerVar[error] **$username** You are missing **\`manage messages\`** permission]
$argscheck[1;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < messageid >\`\`\`**]

`}



