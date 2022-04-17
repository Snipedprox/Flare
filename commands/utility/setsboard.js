module.exports = {
name: "setsboard",
$if: "v4",
code: `
$author[1;;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Starboard channel been set to <#$findChannel[$message]>**]

$setServerVar[schannel;$findChannel[$message]]



$onlyIf[$channelExists[$findChannel[$message]]!=false;$getServerVar[error] You provided an **invalid** channel]

$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname #channel**]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] ** You are missing \`manage channel\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true$getServerVar[error] **I am missing \`manage messages\` permission**]`}