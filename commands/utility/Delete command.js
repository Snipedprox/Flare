module.exports = {
    name: "del-cmd",
    code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]

<a:cross:953779059756789781>** Successfully cleared command \`$replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]\`**

$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Custom command not found**}}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Please dont use symbols**}}]
$argscheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [name]\`**}}]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;
{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]
`}