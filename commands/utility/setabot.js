module.exports = {
name: "setabot",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Addbot channel been set to <#$findChannel[$message]>**]

$setServerVar[abc;$findChannel[$message]]



$onlyIf[$channelExists[$findChannel[$message]]!=false;$getServerVar[error] You provided an **invalid** channel]

$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < #channel >**]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing \`manage channel\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] ** I am missing \`manage channel\` permission**]`}