module.exports = {
name: "command",
aliases: "cmd",
usage: "command < command name >",
code: `
$getServerVar[check] **INFORMATION ABOUT THE COMMAND $touppercase[$commandinfo[$message;name]]**
$author[1;Command info;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[rdot] **Name: \`$commandinfo[$message;name]\`**
$getServerVar[rdot] **Aliases: \`$commandinfo[$message;aliases]\`**
$getServerVar[rdot] **Usage: \`$commandinfo[$message;usage]\`**
$getServerVar[rdot] **Run: \`$getServerVar[prefix]$commandinfo[$message;usage]\`**]




$suppressErrors[$getServerVar[error] **$username** Invalid **command**]
$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < command name >\`\`\`]`}