module.exports  = {
name: "removewelcome",
$if: "v4",
aliases: 'remove-welcome',
code: `
$author[1;Welcome channel disabled;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Disabled join channel has been disabled**]
$setServerVar[wchannel;undefined]
$onlyIf[$mentionedChannels[1;yes]!=;$getServerVar[error] **$getservervar[prefix]$commandname #channel**]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing** **\`manage server\`** permission]

$onlyIf[$getServerVar[wchannel]!=undefined;$getServerVar[error] **Welcome channel has not been set yet**]`}