module.exports = {
name: "ecohelp",
aliases: "eco-help",
usage: "ecohelp",
code: `
$color[1;$getServerVar[color]]
$description[1;**When adding new messages to your \`work\`,\`crime\`,\`slut\`,\`beg\` command using \`{amount}\` displays how much they earned and using \`{symbol}\` displays the currency symbol**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl]==false;$getServerVar[error] **$username** You are economy blacklisted]`}