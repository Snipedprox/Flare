module.exports = {
name: "setcount",
code: `
$setservervar[lastcount;0]
$author[1;Counting channel set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**  Count channel been set to <#$findChannel[$message]>]

$setServerVar[countchannel;$findChannel[$message]]



$onlyIf[$channelExists[$findChannel[$message]]!=false;$getServerVar[error] **$username** You provided an **invalid** channel]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < #channel >\`\`\`]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}