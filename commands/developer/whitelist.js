module.exports = {
name: "whitelist",
aliases: ['wl','whitel'],
code: `
$setGlobalUserVar[wl;$getGlobalUserVar[wl;$clientid]/$replaceText[$message; ;\];$clientid]
<a:D_Loading1:954025328718798898> **Succesfully whitelisted the guild \`$replaceText[$message; ; , ]\`**


$onlyIf[$message!=;**Specify guildID(s)**]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
`}