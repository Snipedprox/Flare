module.exports = [{
name: "lockdown",
aliases: "ld",
usage: "lockdown",
code: `
$forEachGuildChannel[1;{};lock;]
$author[1;Lockdown;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Locking down all guild channels]

$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`
},{
type: "awaited",
name: "lock",
code: `
$modifyChannelPerms[$guildid;$channelid;-sendmessage]`}]