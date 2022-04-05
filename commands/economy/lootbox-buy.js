module.exports = {
name: "lootbox-buy",
$if: "v4",
code: `

<:add:951911379630182432> **You bought \`$numberSeparator[$message;,]\` 🎁 for $numberSeparator[$multi[250;$message];,]**$getServerVar[symbol]


$setUserVar[cash;$sub[$getUserVar[cash];$multi[200;$message]]]
$setUserVar[lootbox;$sum[$getUserVar[lootbox];$message]]


$cooldown[10s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$getUserVar[cash]>=$multi[1;$message];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that many credits**}}]
$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter an amount**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount]\`**}}]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have a casino**}}]`}