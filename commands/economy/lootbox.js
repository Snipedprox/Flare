module.exports = {
name: "lootbox",
aliases: "lbox",
usage: "lootbox < amount >",
code: `

$getServerVar[check] **$username** You opened $numberSeparator[$message;,] 🎁 and got $numberSeparator[$multi[$random[100;500];$message];,]$getServerVar[symbol]


$setUserVar[cash;$sum[$getUserVar[cash];$multi[$random[100;500];$message]]]
$setUserVar[lootbox;$sub[$getUserVar[lootbox];$message]]


$cooldown[10s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$getUserVar[lootbox]>=$multi[1;$message];$getServerVar[error] **$username** You don't have that many lootboxes]
$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]
$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You don't have a casino]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}