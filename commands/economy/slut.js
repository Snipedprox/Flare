module.exports = {
name: "slut",
code: `
**$replaceText[$replaceText[$randomText[$joinSplitText[;]];{amount};$get[payout]];{symbol};$getServerVar[symbol]]**

$setUserVar[cash;$sum[$getUserVar[cash];$get[payout]]]
$let[payout;$random[$getServerVar[smpayout];$getServerVar[smmpayout]]]


$textSplit[$getServerVar[sreply];/]

$cooldown[$getServerVar[ecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]`}