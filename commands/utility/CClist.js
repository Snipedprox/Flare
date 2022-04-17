module.exports = ({
name:"cmd-list",
aliases: ['listcmd','list-cmd','cmdlist'],
code:`
$author[1;$toUpperCase[$servername's custom commands];$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$replacetext[$replacetext[$checkcondition[$get[t]==mtags];true;$replacetext[<@$joinsplittext[>\n<@]>;<@>;]];false;$joinsplittext[\n ]]]

$textsplit[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;$replacetext[$getservervar[ctags];heh~~;]];false;$getservervar[$get[t]]];~~]
$onlyif[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;heh];false;]!=$getservervar[$get[t]];$getServerVar[error] **This guild has no available tags**]
$let[t;ccmd]`})