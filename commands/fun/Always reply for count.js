module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$toLowerCase[$message]==$getServerVar[lastcount]]
$addCmdReactions[✅]
$setServerVar[lastcount;$sum[$getServerVar[lastcount];1]]
$else
<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** number
$endif




$onlyIf[$isNumber[$message]!=false;<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** number]
$onlyIf[$channelID==$getServerVar[countchannel];]


$onlyIf[$getUserVar[countblacklist]!=true;]`}