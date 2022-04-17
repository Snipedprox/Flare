module.exports = {
name: "bd",
usage: "bd < on / off >",
code: `
$author[1;Blacklisted words;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully **$replacetext[$replacetext[$tolowercase[$message];on;enabled];off;disabled]** blacklisted words]

$setServerVar[bdon;$tolowercase[$message]]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < on / off >\`\`\`]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageserver]==true;$getServerVar[error] **I am missing the \`manage server\` permission**]
$onlyIf[$tolowercase[$checkcontains[$message;on;off]]==on;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < on / off >\`\`\`]`}