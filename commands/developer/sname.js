module.exports = {
name: "sname",
aliases: ['same','sane'],
code: `
$author[1;Name updated;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Name has been changed to \`$message\`]
$setBotUsername[$message]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < name >\`\`\`]

$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}