module.exports = {
name: "unwhitelist",
aliases: ['uwl','unwl'],
code: `

<a:D_Loading1:954025328718798898> **Succesfully unwhitelisted the guild \`$message[1]\`**


$onlyIf[$message!=;**Specify guildID(s)**]

$setGlobalUserVar[wl;$replacetext[$getGlobalUserVar[wl;$clientid];/$splittext[$get[i]];;1];$clientid]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;{newEmbed: {color:$getGlobalUserVar[color]} {description: <a:cross:953779059756789781> **That server id is not in my database**}}]
$textsplit[$getGlobalUserVar[wl;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
`}