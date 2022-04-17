module.exports = {
name: "reset-level",
aliases: "resetlevel",
usage: "reset-level < userID >",
code: `
$author[1;Levels reset]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Reset **[$numberSeparator[$getUserVar[level;$get[u]];,] Levels](https://u.com)** from **<@$get[u]>**]
$setUserVar[level;0;$get[u]]

$let[u;$findMember[$message;yes]]


$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]

$onlyIf[$findMember[$message;yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < userID >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
`}