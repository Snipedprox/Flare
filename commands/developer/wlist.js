module.exports = {
name: "wlist",
code: `
\`\`\`js
$joinSplitText[\n]\`\`\`

$textsplit[$getGlobalUserVar[wl;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]`}