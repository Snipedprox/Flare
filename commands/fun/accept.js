module.exports = {
name: "maccept",
aliases: "mccept",
usage: "maccept < @user >",
code: `

<:8700zerolove:955637262014623796> **$username** and **$username[$mentioned[1]]** Are now married!

$setGlobalUserVar[marry;married;$authorID]
$setGlobalUserVar[marry;married;$mentioned[1]]
$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[accept;0;$authorID]
$setGlobalUserVar[mar;$username;$mentioned[1]]
$setGlobalUserVar[mar;$username[$mentioned[1]];$authorID]

$onlyIf[$mentioned[1]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < user >\`\`\`**]
$onlyIf[$getGlobalUserVar[accept;$authorID]>0;$getServerVar[error] **$username** You can't accept someone you asked]
$onlyIf[$authorID!=$mentioned[1];$getServerVar[error] **$username** You can't accept yourself]
$onlyIf[$getGlobalUserVar[waiting;$authorID]>0;$getServerVar[error] **$username** You need to ask someone to marry you]
$onlyIf[$getGlobalUserVar[waiting;$mentioned[1]]>0;$getServerVar[error] **$username** You should ask someone to marry you]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;$getServerVar[error] **$username** Youare already married]`}