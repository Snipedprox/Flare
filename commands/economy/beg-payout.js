module.exports = {
name: "beg-payout",
aliases: "beg-income",
usage:  "beg-payout [min] [max]",
code: `
$getServerVar[check] **$username** Set the payout for \`beg\` from $message[1] up to $message[2
$setServerVar[bmpayout;$message[1]]
$setServerVar[bmmpayout;$message[2]]

$argsCheck[2;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < min > < max >\`\`\`]

$onlyIf[$isNumber[$message[1]]==true;$getServerVar[error] **$username** You provided an **invalid** number]
$onlyIf[$isNumber[$message[2]]==true;$getServerVar[error] **$username** You provided an **invalid** number]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}