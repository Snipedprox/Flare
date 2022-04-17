module.exports  = {
name: "setwelcome",
$if: "v4",
aliases: ['set-welcome','welcome'],
code: `
$author[1;Welcome channel set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Join channel has been set to <#$mentionedChannels[1;yes]>**]
$setServerVar[wchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;$getServerVar[error] **$getservervar[prefix]$commandname #channel**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}