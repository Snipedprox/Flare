module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getUserVar[afk;$mentioned[1;no]]==true]

$setuservar[afk_pings;$sum[$getuservar[afk_pings;$mentioned[1]];1];$mentioned[1]]
$setuservar[afk_mentions;$getuservar[afk_mentions;$mentioned[1]]\n$usertag;$mentioned[1]]
$sendMessage[$getServerVar[error] **$username** $usertag[$mentioned[1]] is currently afk
Reason: $getUserVar[afkr;$mentioned[1]]
Time: \`$parseDate[$sub[$dateStamp;$getUserVar[afkt;$mentioned[1]]];time]\` ago;no]
$endif

`}

