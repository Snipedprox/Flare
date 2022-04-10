module.exports = {
name: "ccdelete",
$if: "v4",
code: `
$deleteChannel[$channelID]

$setUserVar[camount;0]

$onlyIf[$getUserVar[camount]==1;$getServerVar[error] **$username** You don't own a custom channel]

$onlyIf[$channelID==$getUserVar[cid;$authorid];$getServerVar[error] **$username** You are not the creator of this channel]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]
`}