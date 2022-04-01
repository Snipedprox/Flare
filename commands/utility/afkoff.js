module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `

$if[$getUserVar[afk]==true]
$setuservar[afk_pings;0]
$setuservar[afk_mentions;]
$setuservar[afkr;]
$setuservar[afkt;0]
$setUserVar[afk;false]

$changeNickname[$authorID;$nickname] 

$sendMessage[{newEmbed: {color:$getservervar[color]} {description:
**$usertag i have removed you from afk**
**Times pinged: $getUserVar[afk_pings]**
**Afk time: \`$parseDate[$sub[$dateStamp;$getUserVar[afkt;$mentioned[1]]];time]\` ago**
**Mentions: $getUserVar[afk_mentions]**}};no]
$endif`}