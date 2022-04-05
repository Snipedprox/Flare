module.exports ={
name: "lootbox-add",
code: `

<:add:951911379630182432> **Added $numberSeparator[$get[amount];,]🎁 to <@$get[u]>**

$setUserVar[lootbox;$sum[$getUserVar[lootbox;$get[u]];$get[amount]];$get[u]]

$onlyIf[$isNumber[$get[amount]]!=false;{newEmbed: {color:$getVar[color]} {author:Error:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**<:xelasmh:952139603740078120> That is not a number**}}]

$onlyIf[$checkContains[$get[amount];-;+;=;_;.;,;/]==false;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount] (user)\`**}}]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount] (user)\`**}}]

$onlyIf[$getUserVar[casino;$get[u]]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You/they dont have a casino**}}]

$let[amount;$truncate[$message[1]]]
$let[u;$findMember[$message[2];yes]]

$suppressErrors[wrong usage]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}