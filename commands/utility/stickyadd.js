module.exports = {
name:"stickyadd",
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Sticky message has been created
Sticky command name: \`$splittext[1]\`**]
$setservervar[ssreply;$getservervar[ssreply]~~$splittext[2]]
$setservervar[sstags;$getservervar[sstags]~~$splittext[1]]
$onlyif[$checkcontains[$tolowercase[$message];clienttoken;djseval;eval]==false;]
$onlyif[$splittext[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < sticky trigger > | < sticky reply >**]
$textsplit[$replacetext[$message; |;|;1];|]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;<:ZeroWorried:955637230939033660> **$username** You are missing **\`manage server\`** permission]`}