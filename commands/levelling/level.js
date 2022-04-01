module.exports = {
name: "rank",
aliases: "level",
code: `
$color[1;$getServerVar[color]]
$title[1;**$username[$get[u]]'s xp**]
$description[1;
\`\`\`js
Experience: $numberSeparator[$getUserVar[xp;$get[u]];,]/$numberSeparator[$getUserVar[req;$get[u]];,] ( $truncate[$multi[$divide[$getUserVar[xp;$get[u]];$getUserVar[req;$get[u]]];100]]% )
Level: $numberSeparator[$getUserVar[level;$get[u]];,]\`\`\`]
$let[u;$findMember[$message;yes]]`}