module.exports = {
name: "lootbox-add",
aliases: ['lootboxadd','lboxadd','lbox-add'],
usage: "lootbox-add < amount > < userID >",
code: `

$getServerVar[check] **$username** Added $numberSeparator[$get[amount];,]🎁 to <@$get[u]>

$setUserVar[lootbox;$sum[$getUserVar[lootbox];$get[amount]];$get[u]]

$onlyIf[$isNumber[$get[amount]]!=false;<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** number]

$onlyIf[$checkContains[$get[amount];-;+;=;_;.;,;/]==false;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`]

$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`]

$onlyIf[$getUserVar[casino;$get[u]]!=unset;<:ZeroWorried:955637230939033660> **$username** You / They don't have a casino]
$let[amount;$truncate[$message[1]]]
$let[u;$findMember[$message[2];yes]]

$suppressErrors[wrong usage]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}