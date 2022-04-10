module.exports = {
name:"spawns",
$if: "v4",
aliases: "spawning",
usage: "spawns"
code:`$if[$message==disable]
$getServerVar[error] **$username**  You have disabled spawning
$setservervar[rs;false]
$else
$setservervar[ra;$message[1]/$message[2]]
$setservervar[rs;true]
$getServerVar[check] **$username** Enabled spawning range from $numberSeparator[$message[1];,]$getServerVar[symbol] → $numberSeparator[$message[2];,]$getServerVar[symbol]
$onlyif[$message[1]<$message[2];$getServerVar[error] **Correct usage:** \`\`\`js
`$getservervar[prefix]$commandname < min > < max >\`\`\`]
$onlyif[$isnumber[$message[1]$message[2]]==true;$getServerVar[error] **$username** You provided an **invalid** number]
$endif

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}