module.exports = {
name: "buy",
aliases: "buyrole",
usage: "buy < index >",
code:`
 $giverole[$guildid;$authorid;$getservervar[ro$message]] 
$getServerVar[check] **$username** Bought the role \`$rolename[$getServerVar[ro$message]]\` for **$numberSeparator[$getServerVar[rp$message];,]**$getServerVar[symbol];no]

$setUserVar[cash;$sub[$getUserVar[cash];$getServerVar[rp$message]]]

$cooldown[5s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$getUserVar[cash]>=$getServerVar[rp$message];$getServerVar[error] **$username** You dont have **$numberseparator[$getservervar[rp$message];,]**$getservervar[symbol]]
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[ro$message]]==false;$getServerVar[error] **$username** You already have that role]

$onlyIf[$message<101;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index >\`\`\`]
$onlyIf[$getServerVar[ro$message]!=0;$getServerVar[error] **$username** You provided an **invalid** index]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]
`
}