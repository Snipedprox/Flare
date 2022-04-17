module.exports = {
name: "enablexp",
aliases: "levelon",
usage: "enablexp",
code: `
<:Security_Enabled:954076572321742848> **Level system has been enabled**
$setServerVar[lon;on]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`}