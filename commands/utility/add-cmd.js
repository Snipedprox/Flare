module.exports = {
    name: "add-cmd",
    code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]

$author[1;$replaceText[**Added custom command**;*;];$replaceText[$replaceText[$servericon;null;$useravatar[$clientid]];undefined;$useravatar[$clientid]]]
$color[1;$getServerVar[color]]
$description[1;**
<a:D_tick:953783189971816530> Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all available commands**]
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Custom command already exists**}}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant add tags to your custom command**}}]
$argscheck[>2;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [trigger] [response]\`**}}]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]
`}