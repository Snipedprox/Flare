module.exports = {
name: "banner",
code: `
$getUserBanner[$get[user];4096;yes]


$onlyIf[$getUserBanner[$get[u];4096;yes]!=null;$getServerVar[error] Banner not detected]
$onlyIf[$getUserBanner[$get[u];4096;yes]!=undefined;$getServerVar[error] Banner not detected]
$let[u;$findUser[$message;yes]]

$let[user;$findUser[$message;yes]]`}