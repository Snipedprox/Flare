module.exports = {
name: "curse",
$if: "v4",
code: `
$if[$findUser[$message;yes]==$authorid]
🔮 **$username is now cursed
Now you have $sub[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$authorID];1];$authorID]
$globalCooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$else
$if[$findUser[$message;yes]!=]
**🔮 $username cursed $username[$findUser[$message;yes]] 
Now $username[$mentioned] have $sub[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$findUser[$message;yes]];1];$findUser[$message;yes]]
$globalCooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$endif
$endif
`

}