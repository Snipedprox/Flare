module.exports = {
name: "ppsize",
code: `
$color[1;$getServerVar[color]]
$description[1;**$username[$get[u]]'s pp: 8$repeatMessage[$random[5;20];=]D**]
$let[u;$findUser[$message;yes]]`}