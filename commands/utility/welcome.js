module.exports  = {
name: "setwelcome",
$if: "v4",
aliases: ['set-welcome','welcome'],
code: `
$author[1;Welcome channel set;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Join channel has been set to <#$mentionedChannels[1;yes]>**]
$setServerVar[wchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;$getServerVar[error] **$getservervar[prefix]$commandname #channel**]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]`}