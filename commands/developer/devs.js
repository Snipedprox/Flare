module.exports = {
name: "devs",
code: `
\`\`\`js
$joinSplitText[\n]\`\`\`

$textsplit[$getGlobalUserVar[dev;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
`}