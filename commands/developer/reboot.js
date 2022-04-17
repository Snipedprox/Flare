module.exports = {
name: "reboot",
code: `
$reboot

$sendmessage[$getservervar[check] **$username** Rebooting my systems;no]
$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]`}