module.exports = {
name: "ping",
code: `
$color[1;$getVar[color]]
$description[1;\`\`\`js
Message ping: $numberSeparator[$messageping;,] ms
Database ping: $numberSeparator[$dbping;,] ms\`\`\`]`}