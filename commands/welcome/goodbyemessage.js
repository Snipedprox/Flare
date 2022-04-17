module.exports = {
name: "goodbye-message",
$if: "v4",
aliases: ['message-goodbye','gmessage'],
code: `
$author[1;Goodbye message edited;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Goodbye message set**]

$setServerVar[gmessage;$message]



$onlyIf[$message!=;$getServerVar[error] **Your command usage was invalid ( \`$getservervar[prefix]$commandname < message >\` )**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}