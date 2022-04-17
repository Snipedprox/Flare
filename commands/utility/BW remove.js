module.exports = {
name: "remove-bw",
aliases: ['remove-banned-word','rbw','rbword','removebw','del-bw','delbw','dbw'],
usage: "remove-bw < word >",
code: `



$author[1;Deleted banned word;$getservervar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username Deleted the word [$message](https://i.com) from the banned word list**]






$setservervar[bword;$replacetext[$getservervar[bword];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message]]


$onlyif[$findtextsplitindex[$message]!=0;$getservervar[error] **$username** You provided an invalid word]
$textsplit[$getservervar[bword];~~]
$onlyif[$message!=;$getservervar[error] **$username** You need to provide the banned word]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getservervar[error] **$username** You are missing **\`manage server\`** permission]
`} 