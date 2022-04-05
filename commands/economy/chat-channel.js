module.exports = {
name: "chat-channel",
code: `
<a:D_tick:953783189971816530> **Set the chatting \`channel\` to <#$findChannel[$message]> **
$setServerVar[chatchannel;$findChannel[$message]]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a channel**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel]\`**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **I am missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]



$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}