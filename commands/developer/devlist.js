module.exports = {
name: "devlist",
aliases: ['dl','devl'],
code: `
$setGlobalUserVar[dev;$getGlobalUserVar[dev;$clientid]/$findUser[$message;yes];$clientid]
$author[1; Developer added;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully whitelisted the dev \`$usertag[$findUser[$message;yes]]\`]


$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < @user >\`\`\`]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}