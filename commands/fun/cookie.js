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
$globalCooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$endif

`
}