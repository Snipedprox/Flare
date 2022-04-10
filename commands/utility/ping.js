module.exports = {
name: "ping",
code: `
$getServerVar[check] **$username Heres my ping**
$color[1;$getServerVar[color]]
$description[1;\`\`\`js
Message ping: $numberSeparator[$messageping;,] ms
Database ping: $numberSeparator[$dbping;,] ms\`\`\`]`}