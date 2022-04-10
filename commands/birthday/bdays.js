module.exports = {
name: "bdays",
aliases: "bdaycheck",
usage: "bdays < userID >",
code: `
$getServerVar[check] Birthday - \`$parseDate[$sub[$dateStamp;$getUserVar[bday;$get[u]]];time] ago\`



$let[u;$findMember[$message;yes]]`}