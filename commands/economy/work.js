module.exports = {
name: "work",
aliases: "job",
usage: "work",
code: `
$getServerVar[check] **$username** $replaceText[$replaceText[$randomText[$joinSplitText[;]];{amount};$get[payout]];{symbol};$getServerVar[symbol]]

$setUserVar[cash;$sum[$getUserVar[cash];$get[payout]]]
$let[payout;$random[$getServerVar[wmpayout];$getServerVar[wmmpayout]]]


$textSplit[$getServerVar[wreply];/]

$cooldown[$getServerVar[ecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]`}