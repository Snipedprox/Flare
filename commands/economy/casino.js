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
$getServerVar[check] **$username** Casino has been created \`$username\`
$setUserVar[casino;set]
$onlyIf[$getUserVar[casino]==unset;$getServerVar[error] **$username** You already own a casino]
$else
$if[$tolowercase[$message[1]]==delete]
$getServerVar[error] **$username** Casino has been deleted \`$username\`
$setUserVar[casino;unset]
$setUserVar[bank;0]
$setUserVar[cash;0]
$onlyIf[$getUserVar[casino]==set;$getServerVar[error] **$username** You don't own a casino]
$else
$if[$tolowercase[$message[1]]==profile]
$author[1;$username[$get[u]]'s casino]
$color[1;$getServerVar[color]]
$description[1;**
<:topggDotPink:960279787073589268> Credits: $numberSeparator[$getUserVar[cash;$get[u]];,]$getServerVar[symbol]
<:topggDotPink:960279787073589268> Daily streak: $numberSeparator[$getUserVar[dstreak;$get[u]];,]
<:topggDotPink:960279787073589268> Lootboxes: $numberSeparator[$getUserVar[lootbox;$get[u]];,]🎁**]
$onlyIf[$getUserVar[casino;$get[u]]!=unset;$getServerVar[error] **$username** You / They don't own a casino]
$let[u;$findMember[$message[2];yes]]
$endif
$endif
$endif
$endif


$cooldown[10s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]
`}