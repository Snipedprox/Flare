module.exports = {
name: "devunlist",
aliases: ['duwl','dunwl'],
code: `

<a:D_Loading1:954025328718798898> **Succesfully unwhitelisted the dev \`$usertag[$findUser[$message;yes]]\`**


$onlyIf[$message!=;**Specify user(s)**]

$setGlobalUserVar[dev;$replacetext[$getGlobalUserVar[dev;$clientid];/$splittext[$get[i]];;1];$clientid]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;{newEmbed: {color:$getGlobalUserVar[color]} {description: <a:cross:953779059756789781> **That user id is not in my database**}}]
$textsplit[$getGlobalUserVar[dev;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}