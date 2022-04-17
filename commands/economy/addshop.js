module.exports = {
  name: "addshop",
  code:`
  
$getServerVar[check] **$username**  Added \`$rolename[$get[id]]\` to shop for **\`$numberSeparator[$message[3];,]\`**$getServerVar[symbol];no]

$setServerVar[ro$tolowercase[$message[1]];$get[id]]
$setServerVar[rp$tolowercase[$message[1]];$message[3]]


$onlyIf[$isNumber[$message[3]]==true$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index > < @role > < price >\`\`\`]
$onlyIf[$roleExists[$get[id]]!=false;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index > < @role > < price >\`\`\`]
$onlyIf[$get[id]!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index > < @role > < price >\`\`\`]
$let[id;$findRole[$message[2]]]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]



$onlyIf[$message<101;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index > < @role > < price >\`\`\`]
$cooldown[5s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]
`
}