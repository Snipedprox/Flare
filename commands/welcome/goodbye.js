module.exports  = {
name: "setgoodbye",
$if: "v4",
aliases: ['set-goodbye','goodbye'],
code: `
**<a:D_tick:953783189971816530> Leaving channel has been set to <#$mentionedChannels[1;yes]>**
$setServerVar[gchannel;$mentionedChannels[1;yes]]
$onlyIf[$mentionedChannels[1;yes]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel]\`**}}]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}