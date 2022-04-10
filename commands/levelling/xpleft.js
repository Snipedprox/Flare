module.exports = {
name: "xpleft",
code: `
<:DiscordBotMaker:955637250518056971> **$usertag[$get[u]]** will need \`$numberSeparator[$get[left];,]\` XP

$let[left;$sub[$getUserVar[req;$get[u]];$getUserVar[xp;$get[u]]]]
$let[u;$findMember[$message;yes]]`}