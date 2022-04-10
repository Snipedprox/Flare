module.exports = {
name: "reset-level",
aliases: "resetlevel",
usage: "reset-level < userID >",
code: `
<:DiscordBotMaker:955637250518056971> **$username** Successfully reset **$numberSeparator[$getUserVar[level;$get[u]];,]** levels from <@$get[u]>
$setUserVar[level;0;$get[u]]

$let[u;$findMember[$message;yes]]


$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]

$onlyIf[$findMember[$message;yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < userID >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
`}