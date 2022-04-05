module.exports = {
  name: "buy",
  code:`
 $giverole[$guildid;$authorid;$getservervar[ro$message]] 
$sendMessage[**<a:D_tick:953783189971816530> Succesfully bought the role <@&$getServerVar[ro$message]> for $numberSeparator[$getServerVar[rp$message];,]$getServerVar[symbol]**;no]

$setUserVar[cash;$sub[$getUserVar[cash];$getServerVar[rp$message]]]


$onlyIf[$getUserVar[cash]>=$getServerVar[rp$message];**{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that much money**}}]
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[ro$message]]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You already have that role**}}]

$onlyIf[$message<101;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index]\`**}}]
$onlyIf[$getServerVar[ro$message]!=0;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That index is invalid**}}]
$cooldown[5s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
`
}