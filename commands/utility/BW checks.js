module.exports = {
name: "$alwaysExecute",
code: `
$deletein[60s]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[error] **You have said a banned word please do not say that again**]
$deletecommand


$onlyIf[$tolowercase[$get[i]]!=0;]
$let[i;$tolowercase[$findtextsplitindex[$message]]]
$textSplit[$tolowercase[$getServerVar[bword]];~~]
$onlyIf[$getServerVar[bdon]==on;]`}