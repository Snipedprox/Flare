module.exports = {
name: "banned-word-list",
aliases: ['bwl','bannedwordlist'],
code: `
$author[1;$servername's banned word list;$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;$joinSplitText[ , ]]

$textSplit[$getservervar[bword];~~]
$onlyIf[$gettextsplitlength>=1;$getservervar[error] **$servername** Has no banned words]
$textSplit[$getservervar[bword];~~]`}