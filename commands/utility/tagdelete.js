module.exports = ({
name:"tagdelete",
code:`**<:xelaboom:952137218691047444> $message[1] deleted as a tag**
$setservervar[reply;$replacetext[$getservervar[reply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[reply];~~]
$setservervar[tags;$replacetext[$getservervar[tags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That tag is invalid**}}]
$textsplit[$getservervar[tags];~~]
$onlyif[$message!=;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to specify the tag trigger**}}]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`})