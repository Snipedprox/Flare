module.exports = {
name: "lock",
aliases: "l",
usage: "lock < #channel >",
code: `
$modifyChannelPerms[$guildid;$get[id];-sendmessage]
$author[1;Channel lock;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** **Succesfully locked <#$get[id]>**]

$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}