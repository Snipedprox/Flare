module.exports = {
name: "addlevel",
aliases: "addlevel",
usage: "add-level < amount > < userID >",
code: `
$author[1;Levels added]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username**  added [$numberSeparator[$message[1];,] Levels](https://u.com)** to **<@$get[u]>**]
$setUserVar[level;$sum[$getUserVar[level;$get[u]];$message[1]];$get[u]]

$let[u;$findMember[$message[2];yes]]

$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]


$onlyIf[$findMember[$message[2];yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}