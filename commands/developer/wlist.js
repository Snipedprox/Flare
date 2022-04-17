module.exports = {
name: "wlist",
code: `
$getServerVar[check] **$username's list of guilds** 
$author[1;Whitelisted guilds;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**\`\`\`js
$joinSplitText[\n]\`\`\`**]

$textsplit[$getGlobalUserVar[wl;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[wl;$clientid];/]`}