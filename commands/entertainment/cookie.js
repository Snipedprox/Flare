module.exports = {
name: "cookie",
$if: "v4",
aliases: "cookies",
code: `
$if[$findUser[$message;yes]==$authorid]
<a:yummycookie:938753951153676350> **You currently have $getGlobalUserVar[cookie;$authorID] cookies :3 **
$else
<a:yummycookie:938753951153676350> **$username gave a cookie to $username[$findUser[$message;yes]] 
yummmy :3 **
$setGlobalUserVar[cookie;$sum[$getGlobalUserVar[cookie;$findUser[$message;yes]];1];$findUser[$message;yes]]
$globalCooldown[4m;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif

`
}