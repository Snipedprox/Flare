module.exports = {
name: "update",
aliases: ['uc','ucc'],
code: `
$updatecommands
$author[1;Updated commands;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username Refreshed \`$numberSeparator[$commandscount;,]\` commands**]


$onlyForIds[852908598664364082;896846485805744168;$joinSplitText[;];$botownerid;]
$textSplit[$getGlobalUserVar[dev;$clientid];/]`}