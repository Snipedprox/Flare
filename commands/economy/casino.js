module.exports = {
name: "casino",
$if: "v4",
code: `
$if[$tolowercase[$message[1]]==]
\`\`\`
Check around the casino and your stats 

Commands:
  create  Create a profile 
  delete  Delete your profile 
  profile Check your or someone else's profile stats 
\`\`\`
$else
$if[$tolowercase[$message[1]]==create]
<a:D_tick:953783189971816530> **Casino has been created \`$username\`**
$setUserVar[casino;set]
$onlyIf[$getUserVar[casino]==unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You already own a casino**}}]
$else
$if[$tolowercase[$message[1]]==delete]
<a:D_tick:953783189971816530> **Casino has been deleted \`$username\`**
$setUserVar[casino;unset]
$setUserVar[bank;0]
$setUserVar[cash;0]
$onlyIf[$getUserVar[casino]==set;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont own a casino**}}]
$else
$if[$tolowercase[$message[1]]==profile]
$author[1;$username[$get[u]]'s casino]
$color[1;$getServerVar[color]]
$description[1;**
Credits: $numberSeparator[$getUserVar[cash;$get[u]];,]$getServerVar[symbol]
Bank: $numberSeparator[$getUserVar[bank;$get[u]];,]$getServerVar[symbol]
Daily streak: $numberSeparator[$getUserVar[dstreak;$get[u]];,]
Lootboxes: $numberSeparator[$getUserVar[lootbox;$get[u]];,]**]
$onlyIf[$getUserVar[casino;$get[u]]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You / they dont have a casino**}}]
$let[u;$findMember[$message[2];yes]]
$endif
$endif
$endif
$endif


$cooldown[10s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

`}