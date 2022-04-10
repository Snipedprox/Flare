module.exports = {
name: "addmoney",
aliases: "addsmoney",
usage: "addmoney < amount > < userID >",
code: `
$getServerVar[check] **$username** Added $numberSeparator[$get[amount];,]$getServerVar[symbol] to <@$get[u]>
$setUserVar[cash;$sum[$getUserVar[cash;$get[u]];$get[amount]];$get[u]]

$onlyIf[$isNumber[$get[amount]]!=false;$getServerVar[error] **$username** You provided an **invalid** number]

$onlyIf[$checkContains[$get[amount];-;+;=;_;.;,;/]==false;$getServerVar[error] **$username** You provided an **invalid** number]

$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`]

$let[amount;$truncate[$message[1]]]
$let[u;$findMember[$message[2];yes]]
$suppressErrors[wrong usage]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **$username** You are missing **\`manage server\`** permission]}