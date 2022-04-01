module.exports  = {
name: "removegoodbye",
$if: "v4",
aliases: 'remove-goodbye',
code: `
**<a:D_tick:953783189971816530> Leaving channel has been disabled**
$setServerVar[gchannel;undefined]
$onlyIf[$mentionedChannels[1;yes]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel]\`**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$getServerVar[gchannel]!=undefined;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **This module was never enabled**}}]`}