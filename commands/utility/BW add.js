module.exports = {
name: "add-bw",
aliases: ['add-banned-word','abw','bword','addbw'],
usage: "add-bw < word >",
code: `
$setServerVar[bword;$getServerVar[bword]~~$message]


$author[1;Adding words;$getservervar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username Added the word [$message](https://i.com) to the banned word list**]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]
$onlyIf[$message!=;$getservervar[error] **Correct usage:**
\`\`\`js
$getservervar[prefix]$commandname < word >\`\`\`]`} 