module.exports = {
  name: "remind-channel", 
  aliases: ['rmc'], 
  code: `

$channelSendMessage[$findChannel[$message[1];yes];🔔 **Reminder alert** 🔔
$messageslice[2];no]
$channelSendMessage[$findChannel[$message[1];yes];<@$authorid>;no]

$wait[$message[2]]

$sendMessage[**I will remind you in <#$findChannel[$message[1];yes]> in \`$message[2]\` with the reminder**
$messageslice[2]]


$onlyIf[$channelexists[$findChannel[$message[1];yes]]==true;$getServerVar[error] **$username channel is invalid**]

$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[2];s;;1];m;;1];h;;1];d;;1]]==true;$getServerVar[error] **$username Invalid time \`unit\`**]
$onlyif[$checkcontains[$message[2];s;h;m;d]==true;$getServerVar[error] **$username Invalid time \`unit\` ( expected: \`s\`,\`m\`,\`h\`,\`d\` )**]
$onlyIf[$messageSlice[2]!=;$getservervar[error] **Correct usage:
\`\`\`js
$getServerVar[prefix]$commandname < #channel >< time > < reminder >\`\`\`**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}