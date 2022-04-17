module.exports = {
name: "wimg",
code: `
$author[1;Welcome image set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Welcome image has been set]
$image[1;$message]

$setServerVar[wimg;$message]

$onlyIf[$isValidLink[$message]==true;$getServerVar[error] **$username Invalid image link]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]
$onlyIf[$getServerVar[wchannel]!=undefined;$getServerVar[error] **$username The join channel has not been setup yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}