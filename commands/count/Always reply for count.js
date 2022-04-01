module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$toLowerCase[$message]==$getServerVar[lastcount]]
$addCmdReactions[✅]
$setServerVar[lastcount;$sum[$getServerVar[lastcount];1]]
$else
$color[1;$getservervar[color]]
$description[1;**<a:cross:953779059756789781> Wrong number <@$authorid>**]
$endif




$onlyIf[$isNumber[$message]!=false;**The number is invalid**]
$onlyIf[$channelID==$getServerVar[countchannel];]


$onlyIf[$getUserVar[countblacklist]!=true;{newEmbed: {color:$getServerVar[color]} {description:**You are blacklisted from counting**} {deletecommand}}]`}