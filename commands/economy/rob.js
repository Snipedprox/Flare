module.exports = {
name: "rob",
code: `
$setUserVar[notif;$getUserVar[notif;$mentioned[1]]\n$usertag[$authorid>] stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]$getservervar[symbol] from you;$mentioned[1]]

$setUserVar[notif;$getUserVar[notif]\n$usertag[$authorid] you stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]$getservervar[symbol] from $usertag[$mentioned[1]]]

  $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$random[0;$getUserVar[cash;$mentioned[1]]]];$authorID]
$setUserVar[cash;$sub[$getUserVar[cash;$mentioned[1]];$random[0;$getUserVar[cash;$mentioned[1]]]];$mentioned[1]]

**<a:D_tick:953783189971816530> You stole $numberSeparator[$random[0;$getUserVar[cash;$mentioned[1]]];,]**$getServerVar[symbol]** from $username[$mentioned[1]]**
$Cooldown[60s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$onlyIf[$getUserVar[cash;$authorID]>=500{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need more than 500$getServerVar[symbol]**}}]
$onlyIf[$getUserVar[cash;$mentioned[1]]>=500;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **They need more than 500$getServerVar[symbol]**}}]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You can not rob bots**}}]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant rob yourself**}}]
$onlyIf[$mentioned[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [user]\`**}}]`}