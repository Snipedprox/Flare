module.exports = ({
name:"tags",
code:`
$color[1;$getServerVar[color]]
$description[1;
\`\`\`js
$replacetext[$replacetext[$checkcondition[$get[t]==mtags];true;$replacetext[<@$joinsplittext[>\n<@]>;<@>;]];false;$joinsplittext[\n • ]]\`\`\`]

$textsplit[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;$replacetext[$getservervar[ctags];heh~~;]];false;$getservervar[$get[t]]];~~]
$onlyif[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;heh];false;]!=$getservervar[$get[t]];{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username This server has no tags**}}]
$onlyif[$checkcontains[$get[t];mtags;ctags;tags]==true;**Add \`tags\` in your argument**]
$let[t;tags]`})