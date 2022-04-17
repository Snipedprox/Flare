module.exports = {
name: "ppsize",
code: `
$username[$get[u]]'s pp: 8$repeatMessage[$random[5;20];=]D
$let[u;$findUser[$message;yes]]`}