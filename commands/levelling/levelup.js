module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getUserVar[xp]>$getUserVar[req]]


**<:DiscordBotMaker:955637250518056971> GG $username you levelled $replaceText[up to level $numberSeparator[$getUserVar[level];,];up to level 0;up to level 1]!**

$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[req;$sum[$getUserVar[req];$random[100;300]]]
$setUserVar[xp;0]
$let[l;$getuservar[level]]
$else
$setUserVar[xp;$sum[$getUserVar[xp];$random[1;5]]]
$globalcooldown[5s;]
$endif
$onlyIf[$getServerVar[lon]==on;]`}
