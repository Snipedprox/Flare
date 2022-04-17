module.exports = {
name: "slut",
aliases: "sl*t",
usage: "slut",
code: `
$getServerVar[check] **$username** $replaceText[$replaceText[$randomText[$joinSplitText[;]];{amount};$get[payout]];{symbol};$getServerVar[symbol]]

$setUserVar[cash;$sum[$getUserVar[cash];$get[payout]]]
$let[payout;$random[$getServerVar[smpayout];$getServerVar[smmpayout]]]


$textSplit[$getServerVar[sreply];/]

$cooldown[$getServerVar[ecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You / They dont have a casino]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}