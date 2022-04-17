module.exports = ({
name:"tagdelete",
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Tag has been deleted**
Deleted tag: $message[1]]
$setservervar[reply;$replacetext[$getservervar[reply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[reply];~~]
$setservervar[tags;$replacetext[$getservervar[tags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;$getservervar[error] **$username** You provided an invalid tag]
$textsplit[$getservervar[tags];~~]
$onlyif[$message!=;$getservervar[error] **$username** You need to provide the tags trigger]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getservervar[error] **$username** You are missing **\`manage server\`** permission]`})