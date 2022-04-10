module.exports = {
name: "subcount",
$if: "v4",
code: `
$author[1;Substracting count;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**  Successfully removed $numberSeparator[$message[1];,] numbers from count]
$setServerVar[lastcount;$sub[$getServerVar[lastcount];$message[1]]]


$onlyIf[$getServerVar[countchannel]!=0;$getServerVar[error] **$username** Counting channel has not been set yet]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}