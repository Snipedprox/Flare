module.exports = {
name:"with",
aliases:"withdraw",
code:`**<a:D_tick:953783189971816530> You withdrew $numberSeparator[$get[amount];,]**$getServerVar[symbol]
$setUserVar[bank;$sub[$getUserVar[bank];$get[amount]]]
$setUserVar[cash;$sum[$getUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to withdraw more than 0$getservervar[symbol]**}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You can not withdraw negative numbers**}}]
$onlyif[$getUserVar[bank]>=$get[amount];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that much $getservervar[symbol]**}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That is an invalid number**}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[bank;$authorID];1];max;$getUserVar[bank;$authorID];1]]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create your casino**}}]`}