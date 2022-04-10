module.exports = {
name: "disablesboard",
code: `
$author[1;Starboard disabled;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**starboard channel has been disabled**]

$setServerVar[schannel;]
$setservervar[sreq;0]




$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing \`manage channel\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing \`manage channel\` permission**]`}