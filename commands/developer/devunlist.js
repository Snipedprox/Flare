module.exports = {
name: "devunlist",
aliases: ['duwl','dunwl'],
code: `

$author[1Dev removed;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]*$username** Succesfully unwhitelisted the dev \`$usertag[$findUser[$message;yes]]\`]


$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`]

$setGlobalUserVar[dev;$replacetext[$getGlobalUserVar[dev;$clientid];/$splittext[$get[i]];;1];$clientid]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;$getservervar[error] **$username** Invalid developer ID]
$textsplit[$getGlobalUserVar[dev;$clientid];/]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}