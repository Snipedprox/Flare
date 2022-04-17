module.exports = {
name: "pray",
$if: "v4",
code: `
$if[$findUser[$message;yes]==$authorid]
**<:Deep_Praying:954077873197707264> You prayed for yourself
Now you have $sum[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$mentioned[1;yes]];1];$mentioned[1;yes]]
$cooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$else
**<:Deep_Praying:954077873197707264> $username prayed for $username[$findUser[$message;yes]] 
$setGlobalUserVar[pray;$sum[$getGlobalUserVar[pray;$findUser[$message;yes]];1];$findUser[$message;yes]]
Now $username[$findUser[$message;yes]] has $sum[$getGlobalUserVar[pray;$findUser[$message;yes]];1] luck points**
$endif
$cooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]`}