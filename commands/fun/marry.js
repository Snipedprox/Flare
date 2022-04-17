module.exports = {
name: "marry",
aliases: "propose",
usage: "marry < @user >",
code: `
<:8700zerolove:955637262014623796> **<@$mentioned[1]>**, <@$authorid> would like to marry you, will you accept?

$setGlobalUserVar[waiting;2;$authorID]
$setGlobalUserVar[waiting;2;$mentioned[1;yes]]
$setGlobalUserVar[accept;1;$mentioned[1]]

$onlyIf[$getGlobalUserVar[marry;$mentioned[1]]==single;$getServerVar[error] **$username** They are already married]
$onlyIf[$getGlobalUserVar[waiting;$authorID]<1;$getServerVar[error] **$username** You are being waited to get married by somebody else]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;$getServerVar[error] **$username** You are already married]
$onlyIf[$authorID!=$mentioned[1];$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`**]
$onlyIf[$mentioned[1]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`**]`}