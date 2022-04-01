module.exports = {
name: "curse",
$if: "v4",
code: `
$if[$findUser[$message;yes]==$authorid]
🔮 **$username is now cursed
Now you have $sub[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$authorID];1];$authorID]
$globalCooldown[4m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$else
$if[$findUser[$message;yes]!=]
**🔮 $username cursed $username[$findUser[$message;yes]] 
Now $username[$mentioned] have $sub[$getGlobalUserVar[pray;$authorID];1] luck points**
$setGlobalUserVar[pray;$sub[$getGlobalUserVar[pray;$findUser[$message;yes]];1];$findUser[$message;yes]]
$globalCooldown[4m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif
$endif
`

}