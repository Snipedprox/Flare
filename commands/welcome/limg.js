module.exports = {
name: "limg",
code: `
$author[1;Goodbye image set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Goodbye image has been set]
$image[1;$message]

$setServerVar[limg;$message]

$onlyIf[$isValidLink[$message]==true;$getServerVar[error] **$username Invalid image link]
$onlyIf[$getServerVar[wchannel]!=undefined;$getServerVar[error] **$username The join channel has not been setup yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}