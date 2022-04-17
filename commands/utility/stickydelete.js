module.exports = {
name:"stickydelete",
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Stickied message has been deleted**
Deleted sticky message: $message]
$setservervar[ssreply;$replacetext[$getservervar[ssreply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[ssreply];~~]
$setservervar[sstags;$replacetext[$getservervar[sstags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message]]
$onlyif[$findtextsplitindex[$message]!=0;$getservervar[error] **$username** You provided an invalid sticky]
$textsplit[$getservervar[sstags];~~]
$onlyif[$message!=;$getservervar[error] **$username** You need to provide the sticky trigger]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getservervar[error] **$username** You are missing **\`manage server\`** permission]`}