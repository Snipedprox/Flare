module.exports = {
name:"deposited",
aliases:"dep",
code:`**<a:D_tick:953783189971816530> You deposited $numberSeparator[$get[amount];,]**$getServerVar[symbol]
$setUserVar[bank;$sum[$getUserVar[bank];$get[amount]]]
$setUserVar[cash;$sub[$getUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to deposit more than 0$getservervar[symbol]**}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You can not deposit negative numbers**}}]
$onlyif[$getUserVar[bank]>=$get[amount];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that much $getservervar[symbol]**}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That is an invalid number**}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[casino;$authorID];1]]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create your casino**}}]`}