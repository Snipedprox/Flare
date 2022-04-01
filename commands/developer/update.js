module.exports = {
name: "update",
aliases: ['uc','ucc'],
code: `
$updatecommands
$color[1;$getServerVar[color]]
$author[1;Commands reloaded]
$description[1;**<:xelawholesome:952139611746992178> Refreshed \`$numberSeparator[$commandscount;,]\` commands**]


$onlyForIds[852908598664364082;896846485805744168;$joinSplitText[;];$botownerid;]
$textSplit[$getGlobalUserVar[dev;$clientid];/]`}