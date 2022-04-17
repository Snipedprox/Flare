module.exports = {
name: "bdaychannel",
aliases: "bdaychan",
usage: "bdaychannel < #channel >",
code: `
$author[1;Birthday channel set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** Birthday channel set to <#$get[id]>]


$setservervar[bdaychannel;$get[id]]
$let[id;$findChannel[$message]]

$onlyIf[$channelExists[$findChannel[$message]]!=false;$getServerVar[error] **$username** You provided an **invalid** channel]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < #channel >\`\`\`]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **$username** You are missing **\`manage channels\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **$username** I am missing **\`manage channels\`** permission]`}