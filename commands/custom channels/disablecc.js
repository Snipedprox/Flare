module.exports = {
name: "disablecc",
aliases: "disablec",
usage: "disablecc < category Id >",
code: `
$author[1;Disabled custom channels;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully disabled custom channels]

$setServerVar[ccallow;no]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`
}