module.exports = {
name: "beg",
aliases: "begg",
usage: "beg",
code: `
$getServerVar[check] **$username** $replaceText[$replaceText[$randomText[$joinSplitText[;]];{amount};$get[payout]];{symbol};$getServerVar[symbol]]

$setUserVar[cash;$sum[$getUserVar[cash];$get[payout]]]
$let[payout;$random[$getServerVar[bmpayout];$getServerVar[bmmpayout]]]


$textSplit[$getServerVar[breply];/]

$cooldown[$getServerVar[ecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]`}