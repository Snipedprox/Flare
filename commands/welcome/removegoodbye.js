module.exports  = {
name: "removegoodbye",
$if: "v4",
aliases: 'remove-goodbye',
code: `
$author[1;Goodbye channel removed;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Disabled goodbye channel has been disabled**]
$setServerVar[gchannel;undefined]
$onlyIf[$mentionedChannels[1;yes]!=;$getServerVar[error] **$getservervar[prefix]$commandname  #channel**]


$onlyIf[$getServerVar[gchannel]!=undefined;$getServerVar[error] **Goodbye channel has not been set yet**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}