module.exports = {
name: "devs",
code: `
$author[1Developer list;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;\`\`\`js
$joinSplitText[\n]\`\`\`]

$textsplit[$getGlobalUserVar[dev;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
`}