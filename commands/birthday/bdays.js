module.exports = {
name: "bdays",
code: `
$author[1;$usertag[$get[u]]'s birthday stats]
$thumbnail[1;https://media.discordapp.net/attachments/949464162059292672/951614045243469844/496cd7d4bfc59cdf6cd8a3285b42b576.png]
$color[1;$getservervar[color]]
$description[1;
<:D_rightarrow:953778843389399131> **Birthday - \`Was set $parseDate[$sub[$dateStamp;$getUserVar[bday;$get[u]]];time] ago\`**]



$let[u;$findMember[$message;yes]]`}