module.exports = [{
name: "unlockdown",
aliases: "uld",
usage: "unlockdown",
code: `
$forEachGuildChannel[1;{};unlock;]
$author[1;Unlockdown;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Unlocking all guild channels]

$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;<:ZeroWorried:955637230939033660> **$username** You are missing **\`manage channels\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;<:ZeroWorried:955637230939033660> **$username** I am missing **\`manage channels\`** permission]`
},{
type: "awaited",
name: "unlock",
code: `
$modifyChannelPerms[$guildid;$channelid;+sendmessage]`}]