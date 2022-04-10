module.exports = {
name: "lootbox-buy",
aliases: ['lootboxbuy','lboxbuy','lbox-buy'],
code: `

$getServerVar[check] **$username** You bought $numberSeparator[$message;,] 🎁 for $numberSeparator[$multi[250;$message];,]$getServerVar[symbol]


$setUserVar[cash;$sub[$getUserVar[cash];$multi[200;$message]]]
$setUserVar[lootbox;$sum[$getUserVar[lootbox];$message]]


$cooldown[10s;$getServervar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$getUserVar[cash]>=$multi[1;$message];$getServerVar[error] **$username** You can't buy that many]
$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]
$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] You don't have a casino]`}