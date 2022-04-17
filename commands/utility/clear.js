module.exports = {
name: "clear",
code: `

$clear[$message]
$onlyIf[$isNumber[$message]==true;$getServerVar[error] You provided an invalid number]
$onlyIf[$message<101;$getServerVar[error] You can't clear more than 100 messages]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`}