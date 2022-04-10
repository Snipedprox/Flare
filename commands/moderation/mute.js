module.exports = {
name: "mute",
aliases: "stfu",
usage: "mute < userID >",
code: `
$author[1;User muted;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** has succesfully muted <@$mentioned[1]>]
$giveRole[$guildid;$mentioned[1];$getServerVar[muterole]]

$onlyIf[$mentioned[1]!=;$getServerVar[error] **$username** You need to mention a member]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[error] **$username** You need a higher role]

$onlyIf[$rolePosition[$highestRole[$clientid]]<$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[error] **$username**My role needs to be higher than theirs]

  $onlyIf[$rolePosition[$highestRole[$clientid]]<$rolePosition[$getServerVar[muterole]];$getServerVar[error] **$username** My role needs to be **higher** than the mute role]
  
$onlyIf[$getServerVar[muterole]!={NONE};$getServerVar[error] **$username** The mute role has not been set yet]
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]
`
}