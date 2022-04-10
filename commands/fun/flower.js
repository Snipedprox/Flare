module.exports = {
name: "flower",
$if: "v4",
aliases: "sunflower",
code: `
$if[$findUser[$message;yes]==$authorid]
**<:sunflower:938751916677148723> You currently have $numberSeparator[$getGlobalUserVar[flower;$authorID];,] flowers 🌻**
$else
<:sunflower:938751916677148723> **$username gave a flower to $username[$findUser[$message;yes]] 
beautiful :3 **
$setGlobalUserVar[flower;$sum[$getGlobalUserVar[flower;$findUser[$message;yes]];1];$findUser[$message;yes]]
$globalCooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$endif

`
}