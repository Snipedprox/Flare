module.exports = {
name: "lootbox",
$if: "v4",
code: `

<a:D_tick:953783189971816530> **You opened \`$numberSeparator[$message;,]\` 🎁 and got $numberSeparator[$multi[$random[100;500];$message];,]**$getServerVar[symbol]


$setUserVar[cash;$sum[$getUserVar[cash];$multi[$random[100;500];$message]]]
$setUserVar[lootbox;$sub[$getUserVar[lootbox];$message]]


$cooldown[10s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$getUserVar[lootbox]>=$multi[1;$message];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that many lootboxes**}}]
$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [amount] \`**}}]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have a casino**}}]`}