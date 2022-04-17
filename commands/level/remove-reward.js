module.exports = {
name: "remove-reward",
code: `
$setservervar[lrole;$replacetext[$getservervar[lrole];$advancedtextsplit[$getservervar[lrole];/;$findtextsplitindex[$message]];;1]]
$setservervar[lorder;$replacetext[$getservervar[lorder];$splittext[$findtextsplitindex[$message]];;1]]

$author[1;Reward remove;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Deleted the level role for the level \`$message\`**]




$onlyIf[$findtextsplitindex[$message]!=0;$getServerVar[error] **$username** That reward role was **never** added]
$onlyif[$isnumber[$message]==true;$getServerVar[error] **$username** You provided an invalid number]
$textsplit[$getservervar[lorder];/]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}
