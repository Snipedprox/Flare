module.exports = [{
name: "viewlockdown",
aliases: "vll",
usage: "viewlockdown",
code: `

$forEachGuildChannel[5;{};viewlock;]
$author[1;View locking;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Locking channel view all guild channels**]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`
},{
type: "awaited",
name: "viewlock",
code: `
$modifyChannelPerms[$guildid;$channelid;-viewchannel]

`}]