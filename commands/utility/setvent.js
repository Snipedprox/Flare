module.exports = {
name: "setvent",
$if: "v4",
code: `
$sendmessage[**<a:D_tick:953783189971816530> Vent channel has been set to <#$get[id]> ( to create the thread send a message in that channel )**;no]

$setservervar[vchannel;$get[id]]

$onlyIf[$channelExists[$get[id]]!=false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **I cant find that channel**}}]

$onlyIf[$get[id]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#channel]\`**}}]


$let[id;$findChannel[$message;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username you need \`manage_server\` permissions**}}]`}