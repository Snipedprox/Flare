module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getServerVar[lorder]!=]
$giveRoles[$guildID;$replaceText[$replaceText[$findtextsplitindex[$getUserVar[level]]==0];true;$clientid];false;$authorid];$replaceText[$replaceText[$checkCondition[$findtextsplitindex[$getUserVar[level]]!=0];true;$advancedTextSplit[$getServerVar[lrole];/;$findtextsplitindex[$getUserVar[level]]]];false;$lowestrole[$clientid]]]

$textSplit[$getServerVar[lorder];/]
$endif`
}