module.exports = {
name: "chat-payout",
aliases: "chat-income",
usage: "chat-payout < amount >",
code: `
$getServerVar[error] **$username** Set the payout for \`chatting\` in the server to $message$getServerVar[symbol]
$setServerVar[chatpayout;$message]

$argsCheck[1;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]


$onlyIf[$isNumber[$message]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`}