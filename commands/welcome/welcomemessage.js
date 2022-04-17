module.exports = {
name: "welcome-message",
$if: "v4",
aliases: ['message-welcome','wmessage'],
code: `
$author[1;Welcome message edited;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Join message has been set**]

$setServerVar[wmessage;$message]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]

$onlyIf[$message!=;$getServerVar[error] **$getservervar[prefix]$commandname < message >**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}