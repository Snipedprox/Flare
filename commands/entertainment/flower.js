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
$globalCooldown[4m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif

`
}