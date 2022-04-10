module.exports = {
name: "crime",
aliases: "bad",
usage: "crime",
code: `
$getServerVar[check] **$username** $replaceText[$replaceText[$randomText[$joinSplitText[;]];{amount};$get[payout]];{symbol};$getServerVar[symbol]]

$setUserVar[cash;$sum[$getUserVar[cash];$get[payout]]]
$let[payout;$random[$getServerVar[cmpayout];$getServerVar[cmmpayout]]]


$textSplit[$getServerVar[ecreply];/]

$cooldown[$getServerVar[ecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]`}