module.exports = ({
name:"stickies",
code:`
$author[1;$toUpperCase[$servername's sticky commands];$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$replacetext[$replacetext[$checkcondition[$get[t]==ssmtags];true;$replacetext[<@$joinsplittext[>\n<@]>;<@>;]];false;$joinsplittext[\n  ]]]

$textsplit[$replacetext[$replacetext[$checkcondition[$get[t]==ssctags];true;$replacetext[$getservervar[sctags];heh~~;]];false;$getservervar[$get[t]]];~~]
$onlyif[$replacetext[$replacetext[$checkcondition[$get[t]==ssctags];true;heh];false;]!=$getservervar[$get[t]];$getServerVar[error] **This guild has no available sticky commands**]
$onlyif[$checkcontains[$get[t];smtags;ssctags;sstags]==true;**Add \`tags\` in your argument**]
$let[t;sstags]`})