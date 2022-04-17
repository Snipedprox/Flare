module.exports = {
name: "rank",
aliases: "level",
usage: "level { userID }",
code: `
$author[1;$nickname[$get[u]]'s level stats;$useravatar[$get[u]]]
$color[1;$getServerVar[color]]
$description[1;\`\`\`js
Exp: $numberSeparator[$getUserVar[xp;$get[u]];,] / $numberSeparator[$getUserVar[req;$get[u]];,] ( $truncate[$multi[$divide[$getUserVar[xp;$get[u]];$getUserVar[req;$get[u]]];100]]% )
Level: $numberSeparator[$getUserVar[level;$get[u]];,]\`\`\`]

$let[u;$findMember[$message;yes]]

`}