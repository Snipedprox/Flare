module.exports  = {
name: "setgoodbye",
$if: "v4",
aliases: ['set-goodbye','goodbye'],
code: `
$author[1;Goodbye channel edited;https://images-ext-2.discordapp.net/external/0dqJGVrHlovqd2qm3uKVloEm0tI0yrvHTCXkWuewltg/https/i.imgur.com/AlMToQl.png]
$color[1;$getServerVar[color]]
$description[1;**Set the leaving channel to <#$mentionChannels[1;yes]>**]
$setServerVar[gchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;$getServerVar[error] **$username** You didn't use the command the right 
way ( \`$getservervar[prefix]$commandname < #channel >\` )]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **$username** You are missing **\`manage server\`** permission]`}