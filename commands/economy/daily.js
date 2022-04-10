module.exports = {
name: "daily",
aliases: "payday",
usage: "daily",
code: `

$getServerVar[check] **$username you claimed your daily and got**
Credits: **$numberSeparator[$truncate[$divide[$multi[3;$getUserVar[dstreak];$random[100;500]];6]];,]**$getservervar[symbol]
Lootboxes:** $numberSeparator[$truncate[$divide[$multi[$getUserVar[dstreak];$random[1;7]];3]];,]🎁**


$setUserVar[cash;$sum[$getUserVar[cash];$truncate[$divide[$multi[3;$getUserVar[dstreak];$random[100;500]];6]]]]
$setUserVar[dstreak;$sum[$getUserVar[dstreak];1]]
$setUserVar[lootbox;$sum[$getUserVar[lootbox];$truncate[$divide[$multi[$getUserVar[dstreak];$random[1;7]];3]]]]

$cooldown[24h;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You don't have a casino]`}