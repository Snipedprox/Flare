module.exports = {
name: "remove-xp",
aliases: "removexp",
usage: "remove-xp < amount > < userID >",
code: `
$author[1;Exp removed]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Successfully removed **[$numberSeparator[$message[1];,] XP](https://u.com)** from **<@$get[u]>**]
$setUserVar[xp;$sub[$getUserVar[xp;$get[u]];$message[1]];$get[u]]

$let[u;$findMember[$message[2];yes]]

$onlyIf[$getUserVar[xp;$findMember[$message[2];yes]]<0;$getServerVar[error] **$username** They have **0** xp]

$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]

$onlyIf[$findMember[$message[2];yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}