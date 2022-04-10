module.exports = {
name: "stats",
code: `
$getServerVar[check] **$username** Here are my current stats
$color[1;$getServerVar[color]]
$description[1;**
Developer: $usertag[$botownerid]
Language: Aoi.js $packageVersion
Node.js $nodeVersion
Library: Discord.js@13.5.1
Database: MySQL
Creation $creationdate[$clientid;date]

────────────────────────────────────**
\`\`\`js
Gateway           :: $ping ms
Commands          :: $commandscount
Servers           :: $numberSeparator[$servercount;,]
Users             :: $numberSeparator[$allMembersCount;,]
Platform          :: $platform[$clientid]
Uptime            :: $uptime
CPU Usage         :: $djsEval[(require('os').loadavg().reduce((a, b) => a + b, 0) / 3).toFixed(2);yes]%\`\`\`
]
`}