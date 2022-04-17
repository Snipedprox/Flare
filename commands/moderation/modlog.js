module.exports = {
name: "modlog",
code: `
$author[1;Modlog system;https://cdn.discordapp.com/attachments/951816000381288448/965037869246869534/unknown.png]
$color[1;ed5244]
$description[1;**Modlog system set to \`$channelName[$get[u]]\`**]
$setServerVar[modlog;$get[u]]

$onlyIf[$get[u]!=;**$getServerVar[error] $username Correct usage:**
\`\`\`js
$getServerVar[prefix]$commandname < #channel >\`\`\`]

$let[u;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}