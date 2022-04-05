module.exports = {
name: "balance",
aliases: "bal",
code: `
$author[1;$userTag[$get[u]];$useravatar[$get[u]]]
$color[1;$getServerVar[color]]
$description[1;**
<:wallet:924320830748491867> Wallet » $numberSeparator[$getUserVar[cash;$get[u]];,]$getServerVar[symbol]
<:bsymbol:924321320462876732> Bank » $numberSeparator[$getUserVar[bank;$get[u]];,]$getServerVar[symbol]**]
$onlyIf[$getUserVar[casino;$get[u]]!=unset;You need to create a casino with \`$getServerVar[prefix]casino create\`]
$let[u;$findUser[$message;yes]]
$cooldown[5s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]`}