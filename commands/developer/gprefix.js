module.exports = [{
name: "gprefix",
code: `
$forEachGuild[1;{};gprefix;]
$author[1;Setting all server prefixes;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Setting [$numberseparator[$servercount;,]](https://u.com) prefixes to \`$message\`**]

$deleteCommand
$onlyForIDs[$botOwnerID;896846485805744168;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
$onlyif[$charCount[$message]>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [text]\`**}}]`
},{
type: "awaited",
name: "gprefix",
code: `
$setservervar[prefix;$message;$guildID]`}]