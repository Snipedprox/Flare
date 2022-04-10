module.exports = {
name: "sumcount",
$if: "v4",
code: `
$author[1;Adding count;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**  Successfully added $numberSeparator[$message[1];,]  to count]
$setserverVar[lastcount;$sum[$getserverVar[lastcount];$message[1]]]


$onlyIf[$getServerVar[countchannel]!=0;$getServerVar[error] **$username** Counting chnanel has not been set yet]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}