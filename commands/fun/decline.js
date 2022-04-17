module.exports = {
name: "mdecline",
aliases: "mreject",
usage: "mdecline < @user > < reason >",
code: `
$deletecommand 

**<:xelaheartbroken:952137231534014484>  $username Has rejected $username[$mentioned[1]]** ( because: $nomentionmessage )**

$setGlobalUserVar[marry;single;$authorID]
$setGlobalUserVar[marry;single;$mentioned[1]]

$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[reject;$sum[$getGlobalUserVar[reject;$mentioned[1]];1];$mentioned[1]]
$setGlobalUserVar[rejector;$sum[$getGlobalUserVar[rejector;$authorID];1];$authorID]



$onlyIf[$getGlobalUserVar[accept;$authorID]>0;$getServerVar[error] **$username** You cant reject someone you asked]
$onlyIf[$noMentionMessage!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
$onlyIf[$authorID!=$mentioned[1];$getServerVar[error] **$username** You can't reject yourself]
$onlyIf[$mentioned[1]!=;$getServerVar[error] **$username** You need to mention someone]
$onlyIf[$getGlobalUserVar[waiting;$authorID]>0;$getServerVar[error] **$username** You can't reject anyone at the moment]
$onlyIf[$getGlobalUserVar[waiting;$mentioned[1]]>0;$getServerVar[error] **$username** You aren't being proposed to]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;$getServerVar[error] **$username**You are already married]`}