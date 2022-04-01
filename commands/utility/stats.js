module.exports = {
name: "stats",
code: `
$color[1;$getVar[color]]
$description[1;**
Developer: [$usertag[$botownerid]](https://u.com)
Language: [Aoi.js ](https://u.com) (Node.js@v16.13.2)
Library: [Discord.js@13.5.1](https://u.com)
Database: [MySQL](https://u.com)
Creation $creationdate[$clientid;date]

────────────────────────────────────**
\`\`\`js
Gateway           :: $ping ms
Commands          :: $commandscount
Servers           :: $numberSeparator[$servercount;,]
Users             :: $numberSeparator[$allMembersCount;,]
Platform          :: Linux
Uptime            :: $uptime
CPU Usage         :: $djsEval[(require('os').loadavg().reduce((a, b) => a + b, 0) / 3).toFixed(2);yes]%\`\`\`
]
`}