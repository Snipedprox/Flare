module.exports = {
name: "rob",
$if: "v4",
aliases: "steal",
usage: "rob < @user >",
code: `
$if[$randomText[w;l;l;l;l;l;l;w;w;w;l;l;l;l;w;w;w;l;l;l;l;w;w;w;w;w;w;l;l;l;l]==w]

$setUserVar[cash;$sum[$getUserVar[cash;$findmember[$message;yes]];$random[500;$getUserVar[cash;$findmember[$message;yes]]]]]
$setUserVar[$sub[$getUserVar[cash;$findmember[$message;yes]];$random[500;$getUserVar[cash;$findmember[$message;yes]]]];$findmember[$message;yes]]

$getServerVar[check]**$username** You stole $numberSeparator[$random[0;$getUserVar[cash;$findmember[$message;yes]]];,]**$getServerVar[symbol]** from **$username[$findmember[$message;yes]]**


$else

$setUserVar[cash;$sub[$getUserVar[cash];$random[500;$getUserVar[cash]]]]
$setUserVar[$sum[$getUserVar[cash;$findmember[$message;yes]];$random[500;$getUserVar[cash]]];$findmember[$message;yes]]

$getServerVar[check]**$username** You tried robbing **$username[$findmember[$message;yes]]** but failed and paid them **$numberSeparator[$random[500;$getUserVar[cash]];,]$getservervar[symbol]**


$endif
$Cooldown[60s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$getUserVar[cash;$findmember[$message;yes]]>=500;$getServerVar[error] **$username** They dont have **500$getservervar[symbol]** credits]
$onlyIf[$getUserVar[cash]>=500;$getServerVar[error] **$username** You dont have **500$getservervar[symbol]** credits]
$onlyIf[$isBot[$findmember[$message;yes]]!=true;$getServerVar[error] **$username** You van't rob bots]
$onlyIf[$findmember[$message;yes]!=$authorID;$getServerVar[error] **$username** You can't rob yourself]
$onlyIf[$findmember[$message;yes]!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`]
$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You / They dont have a casino]
$onlyIf[$getUserVar[casino;$findmember[$message;yes]]!=unset;$getServerVar[error] **$username** You / They dont have a casino]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]
`}