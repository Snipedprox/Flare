module.exports = {
name: "whitelist",
aliases: ['wl','whitel'],
code: `
$setGlobalUserVar[wl;$getGlobalUserVar[wl;$clientid]/$replaceText[$message; ;\];$clientid]
$author[1;Guild whitelisted;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Succesfully whitelisted the guild \`$replaceText[$message; ; , ]\`]


$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < guildID >\`\`\`]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[wl;$clientid];/]
`}