module.exports = {
name: "blacklistcount",
code: `
$setUserVar[countblacklist;true;$get[u]]
<:blacklist:954025323740143626> **$username** Blacklisted <@$get[u]> from counting



$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]

$onlyIf[$getServerVar[countchannel]!=0;$getServerVar[error] **$username** Counting channel has not been set yet]

$onlyIf[$get[u]!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < member >\`\`\`]

$let[u;$findMember[$message;yes]]`}
