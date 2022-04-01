module.exports = {
name: "pray",
$if: "v4",
code: `
$if[$findUser[$message;yes]==$authorid]
**<:Deep_Praying:954077873197707264> You prayed for yourself
Now you have $sum[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$mentioned[1;yes]];1];$mentioned[1;yes]]
$cooldown[4m{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$else
**<:Deep_Praying:954077873197707264> $username prayed for $username[$findUser[$message;yes]] 
$setGlobalUserVar[pray;$sum[$getGlobalUserVar[pray;$findUser[$message;yes]];1];$findUser[$message;yes]]
Now $username[$findUser[$message;yes]] has $sum[$getGlobalUserVar[pray;$findUser[$message;yes]];1] luck points**
$endif
$cooldown[4m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]`}