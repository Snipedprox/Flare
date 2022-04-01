module.exports = {
name: "devlist",
aliases: ['dl','devl'],
code: `
$setGlobalUserVar[dev;$getGlobalUserVar[dev;$clientid]/$findUser[$message;yes];$clientid]
<a:D_Loading1:954025328718798898> **Succesfully whitelisted the dev \`$usertag[$findUser[$message;yes]]\`**


$onlyIf[$message!=;**Specify user(s)**]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}