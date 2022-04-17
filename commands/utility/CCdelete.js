module.exports = ({
name:"del-cmd",
aliases: ['delcmd','cmd-del','delete-cmd','cmd-delete','deletecmd','cmddelete'],
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Custom command has been deleted
Deleted tag: \`$getServerVar[prefix]$message[1]\`**]
$setservervar[cdes;$replacetext[$getservervar[cdes];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[cdes];~~]
$setservervar[ccmd;$replacetext[$getservervar[ccmd];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;$getservervar[error] **$username** You provided an invalid **custom command**]
$textsplit[$getservervar[ccmd];~~]
$onlyif[$message!=;$getservervar[error] **$username** You need to provide the trigger]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getservervar[error] **$username** You are missing **\`manage server\`** permission]`})