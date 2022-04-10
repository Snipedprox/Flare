module.exports = {
name: "unlock",
aliases: "ul",
usage: "unlock < #channel >",
code: `
$modifyChannelPerms[$guildid;$get[id];+sendmessage]
$author[1;Unlock;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Succesfully unlocked <#$get[id]>]

$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}