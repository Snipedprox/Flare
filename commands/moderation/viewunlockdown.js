module.exports = [{
name: "viewunlockdown",
aliases: "vudl",
usage: "viewunlockdown",
code: `

$forEachGuildChannel[5;{};viewunlock;]
$author[1;View unlocking;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Unlocking all server channel views**]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`
},{
type: "awaited",
name: "viewunlock",
code: `
$modifyChannelPerms[$guildid;$channelid;-viewchannel]

`}]