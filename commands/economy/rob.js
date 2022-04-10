module.exports = {
name: "rob",
aliases: "steal",
usage: "rob < @user >",
code: `
$setUserVar[notif;$getUserVar[notif;$mentioned[1]]\n$usertag[$authorid>] stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]$getservervar[symbol] from you;$mentioned[1]]

$setUserVar[notif;$getUserVar[notif]\n$usertag[$authorid] you stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]$getservervar[symbol] from $usertag[$mentioned[1]]]

  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[0;$getUserVar[cash;$mentioned[1]]]];$authorID]
$setUserVar[cash;$sub[$getUserVar[cash;$mentioned[1]];$random[0;$getUserVar[cash;$mentioned[1]]]];$mentioned[1]]

$getServerVar[check]**$username** You stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]**$getServerVar[symbol]** from **$username[$mentioned[1]]**

$Cooldown[60s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$onlyIf[$getUserVar[cash;$mentioned[1]]>=500;$getServerVar[error] **$username** They dont have enough credits]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;$getServerVar[error] **$username** You van't rob bots]
$onlyIf[$mentioned[1]!=$authorID;$getServerVar[error] **$username** You can't rob yourself]
$onlyIf[$mentioned[1]!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`]`}