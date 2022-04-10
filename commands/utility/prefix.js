module.exports = {
name: "prefix",
code: `
$setServerVar[prefix;$replaceText[$message; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited the server prefix**
$getServerVar[rdot] Old prefix: $getServerVar[prefix]
$getServerVar[rdot] New prefix: $replaceText[$message; ;]]

$argsCheck[>0;$getservervar[error] **Correct usage: 
\`\`\`js
$getServerVar[prefix]$commandname < prefix >\`\`\`**]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]
`}