module.exports = {
name: "viewunlock",
aliases: "vul",
usage: "viewunlock < #channel >",
code: `
$modifyChannelPerms[$guildid;$get[id];+viewchannel]
$author[1;View unlocking;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Unlocking channel view of <#$get[id]>**]



$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}