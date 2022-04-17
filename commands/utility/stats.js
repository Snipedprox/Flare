module.exports = {
name: "stats",
code: `
$color[1;$getServerVar[color]]
$author[1;$username[$clientid]'s stats]
$description[1;**
Developer: $usertag[$botownerid]
Language: Aoi.js v$packageVersion
Node.js $nodeVersion
Library: Discord.js@13.5.1
Database: MySQL
Creation $creationdate[$clientid;date]
Avatar: [Download]($useravatar[$clientid])

──────────────────────────────

\`\`\`js
Gateway           :: $ping ms
Commands          :: $commandscount
Servers           :: $numberSeparator[$servercount;,]
Users             :: $numberSeparator[$allMembersCount;,]
Platform          :: $platform[$clientid]
Uptime            :: $uptime
CPU Usage         :: $djsEval[(require('os').loadavg().reduce((a, b) => a + b, 0) / 3).toFixed(2);yes]%\`\`\`

──────────────────────────────

\`\`\`js
Emotes: $usertag[501949394774523904] ( Dev: $usertag[240826488557928449] )
Host: https://botgate.xyz
Helpers: $usertag[734031360548929606] , $usertag[696698254770831421]\`\`\`**

]
`}