module.exports = {
name: "removeshop",
aliases: "remove-shop",
usage: "removeshop < index >",
code:`
  $resetServerVar[rp$message]
  $resetServerVar[ro$message]
$getServerVar[check] **$username** Deleted the role from the shop

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index >\`\`\`]
`
}