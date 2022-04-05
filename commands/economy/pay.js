module.exports = {
name:"donate",
aliases:"pay",
code:`
$setUserVar[notif;$getUserVar[notif;$get[user]]\n$usertag[$authorid] paid you $numberSeparator[$get[amount];,]$getservervar[symbol];$get[user]]
$setUserVar[notif;$getUserVar[notif]\n<@$authorid> you paid $usertag[$get[user]] $numberSeparator[$get[amount];,]$getservervar[symbol]]




$sendmessage[**<a:D_tick:953783189971816530> <@$authorid> paid $numberSeparator[$get[amount];,]**$getservervar[symbol]**to <@$get[user]> with $numberSeparator[$sub[$get[tax];$get[amount]];,]**$getservervar[symbol]** tax**;no]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID];$get[amount]];$authorID]
$setUserVar[cash;$sum[$getUserVar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]>=10;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to specify an amount greater than 10$getServerVar[symbol]**}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant pay in negative numbers**}}]
$onlyif[$get[amount]<=$getUserVar[cash;$authorID];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant pay more than what you have**}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount] [user]\`**}}]
$let[tax;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1]]
$let[amount;$truncate[$sub[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1];$multi[$divide[5;100];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1]]]]]
$onlyif[$get[user]!=$authorid;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount] [user]\`**}}]
$onlyif[$memberexists[$get[user]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That user does not exist**}}]
$onlyIf[$getUserVar[casino;$get[user]]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **They dont have a casino**}}]

$let[user;$findUser[$message[2];no]]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have a casino**}}]
`}