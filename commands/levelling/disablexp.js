module.exports = {
name: "disablexp",
aliases: "leveloff",
usage: "disablexp",
code: `
<:Security_Disabled:954076574691516476> **Level system has been disabled**
$setServerVar[lon;off]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`}