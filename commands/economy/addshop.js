module.exports = {
  name: "addshop",
  code:`
  
$sendMessage[**<a:D_tick:953783189971816530> added <@&$get[id]> to shop for \`$numberSeparator[$message[3];,]\`$getServerVar[symbol]**;no]

$setServerVar[ro$tolowercase[$message[1]];$get[id]]
$setServerVar[rp$tolowercase[$message[1]];$message[3]]


$onlyIf[$isNumber[$message[3]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index] [role] [price]\`**}}]
$onlyIf[$roleExists[$get[id]]!=false;**{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index] [valid role] [price]\`**}}]
$onlyIf[$get[id]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index] [role] [price]\`**}}]
$let[id;$findRole[$message[2]]]


$onlyIf[$hasperms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]



$onlyIf[$message<101;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index] [role] [price]\`**}}]
$cooldown[5s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
`
}