module.exports = ({
name:"tags",
code:`
$author[1;$toUpperCase[$servername's tags];$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$replacetext[$replacetext[$checkcondition[$get[t]==mtags];true;$replacetext[<@$joinsplittext[>\n<@]>;<@>;]];false;$joinsplittext[\n • ]]]

$textsplit[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;$replacetext[$getservervar[ctags];heh~~;]];false;$getservervar[$get[t]]];~~]
$onlyif[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;heh];false;]!=$getservervar[$get[t]];$getServerVar[error] **This guild has no available tags**]
$onlyif[$checkcontains[$get[t];mtags;ctags;tags]==true;**Add \`tags\` in your argument**]
$let[t;tags]`})