module.exports = {
name: "balance",
aliases: ['bal','wallet','cash'],
usage: "balance < userID >",
code: `
$author[1;$userTag[$get[u]];$useravatar[$get[u]]]
$color[1;$getServerVar[color]]
$description[1;**<:banked:961904863518818354> Wallet - $numberSeparator[$getUserVar[cash;$get[u]];,]$getServerVar[symbol]**]
$onlyIf[$getUserVar[casino;$get[u]]!=unset;$getServerVar[error] **$username** You / They dont have a casino]
$let[u;$findUser[$message;yes]]
$cooldown[5s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}