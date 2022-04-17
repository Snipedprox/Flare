module.exports = {
name: "economy",
code: `
$author[1;$replaceText[$replaceText[$message;on;Economy has been enabled];off;Economy has been disabled];$getservervar[suca]]
$color[1;$getServerVar[color]]
$setServerVar[eco;$message;$guildID]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;**$getServerVar[error] $username You are missing the \`manage server\` permissions**]
$onlyIf[$checkContains[$message;on;off]==true;$getServerVar[error] **Correct usage:**
\`\`\`js
$getservervar[prefix]$commandname < on / off >\`\`\`]`}