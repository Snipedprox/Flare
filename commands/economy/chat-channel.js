module.exports = {
name: "chat-channel",
aliases: "chat-set",
usage: "chat-channel < #channel >",
code: `
$getServerVar[check] **$username** Set the chatting \`channel\` to <#$findChannel[$message]>
$setServerVar[chatchannel;$findChannel[$message]]


$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < #channel >\`\`\`]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}