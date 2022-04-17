module.exports = {
name: "divorce",
aliases: "divorc",
usage: "divorce < @user > < reason >",
code: `<:zeroreee:955637248223748186>  **$username** has divorced **<@$mentioned[1]>** ( because: $nomentionmessage )**
$setGlobalUserVar[marry;single;$mentioned[1]]
$setGlobalUserVar[marry;single;$authorID]
$setGlobalUserVar[waiting;0;$authorID]
$setGlobalUserVar[waiting;0;$mentioned[1]]
$setGlobalUserVar[divorced;$sum[$getGlobalUserVar[divorced;$mentioned[1]];1];$mentioned[1]]
$setGlobalUserVar[divorced;$sum[$getGlobalUserVar[divorced;$authorID];1];$authorID]

$setGlobalUserVar[accept;0;$authorID]
$onlyIf[$authorID!=$mentioned[1];$getServerVar[error] **$username** You can't divorce yourself]
$onlyIf[$noMentionMessage!=;$getServerVar[error] **Correct usage: \`\`\`js$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
$onlyIf[$getGlobalUserVar[marry;$authorID]==married;$getServerVar[error] **$username** You aren't married]
$onlyIf[$getGlobalUserVar[marry;$mentioned[1]]==married;$getServerVar[error] **$username** They aren't married]`}