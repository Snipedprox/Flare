module.exports = {
name: "unwhitelist",
aliases: ['uwl','unwl'],
code: `

$author[1;Guild unwhitelisted;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Succesfully unwhitelisted the guild \`$message[1]\`]


$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < guildID >\`\`\`]

$setGlobalUserVar[wl;$replacetext[$getGlobalUserVar[wl;$clientid];/$splittext[$get[i]];;1];$clientid]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;$getServerVar[error] **$username** You provided an **invalid** guild ID]
$textsplit[$getGlobalUserVar[wl;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[wl;$clientid];/]
`}