module.exports = {
name: "ecoconfig",
aliases: "ecoedit",
usage: "ecoconfig",
code: `
$getServerVar[check]**$username economy configuration**
\`\`\`js
Emote: $getServerVar[symbol] - ecoset emote < emote >\`\`\`

\`\`\`js
When adding new messages to your work,crime,slut,beg command using {amount} displays how much they earned and using {symbol}\ displays the currency symbol**]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **$username** You are missing **\`manage server\`** permission]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}