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

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing** **\`manage server\`** permission]

$onlyIf[$getServerVar[gchannel]!=undefined;$getServerVar[error] **Goodbye channel has not been set yet**]`}