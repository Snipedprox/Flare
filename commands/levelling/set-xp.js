module.exports = {
name: "set-xp",
aliases: "setxp",
usage: "set-xp < amount > < userID >",
code: `
<:DiscordBotMaker:955637250518056971> **$username** Successfully set $numberSeparator[$message[1];,] xp to <@$get[u]>
$setUserVar[xp;$message[1];$get[u]]

$let[u;$findMember[$message[2];yes]]


$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]

$onlyIf[$findMember[$message[2];yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
`}