module.exports = {
name: "banner",
code: `
$getUserBanner[$get[user];4096;yes]


$onlyIf[$getUserBanner[$get[u];4096;yes]!=null;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **I cant detect a banner**}}]


$onlyIf[$getUserBanner[$get[u];4096;yes]!=undefined;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **I cant detect a banner**}}]
$let[u;$findUser[$message;yes]]

$let[user;$findUser[$message;yes]]`}