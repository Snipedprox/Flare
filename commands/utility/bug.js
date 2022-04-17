module.exports = {
name: "bug",
code: `
$color[1;$getServerVar[color]]
$description[1;**$getServerVar[check] Bug report send out, my developer will look into it**]
$sendDM[**New report $username[$botownerid]**
\`\`\`js
Author: $usertag[$authorid]
Guildid: $guildID
Report: $message\`\`\`;$botownerid]

$argsCheck[>24;**$getServerVar[error] $username describe in more than 25 words what the bug is**]`}