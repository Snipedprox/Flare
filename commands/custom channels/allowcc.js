module.exports = {
name: "allowcc",
aliases: "enablecc",
usage: "allowcc < category Id >",
code: `
$author[1;Enabled custom channels;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Succesfully enabled custom channels]

$setServerVar[ccallow;yes]
$setServerVar[catid;$message]
$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < category ID >\` )]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`
}