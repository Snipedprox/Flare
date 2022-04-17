module.exports = {
name: "password",
usage: "password < length >",
code: `
$sendDm[\`\`\`js
$randomString[$message]\`\`\`;$authorid]
$sendDm[$getServerVar[check] **$username here is your random password,don't share with anyone**;$authorid]
$sendMessage[$getservervar[check] **\`$username\` Send you a dm with your new password**;no]

$onlyIf[$isNumber[$message]==true;$getServerVar[error] **\`$username\` Invalid number**]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getServerVar[prefix]$commandname < length >\`\`\`]`}
