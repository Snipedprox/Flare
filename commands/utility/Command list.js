module.exports = {
    name: "cmd-list",
    code: `
$author[1;$replaceText[**Custom commands**;*;];$replaceText[$replaceText[$servericon;null;$useravatar[$clientid]];undefined;$useravatar[$clientid]]]
$color[1;$getServerVar[color]]
$description[1;**\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`**]
$addtimestamp[1]
$onlyif[$gettextsplitlength>=2;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **The server has no custom commands**}}]
$textsplit[$getservervar[ccmd];/] 
`}