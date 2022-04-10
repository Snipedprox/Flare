module.exports = {
name: "disablecount",
code: `
$setservervar[lastcount;1]
$author[1;Disabled counting;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Count channel been disabled*]

$setServerVar[countchannel;0]



$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}