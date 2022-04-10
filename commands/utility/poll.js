module.exports = {
name: "poll",
code: `
$getServerVar[check] **Poll has been created**
$color[1;$getServerVar[color]] $author[1;$replaceText[**📊 $username's poll;*;];$useravatar[$clientid]] $description[1;❔ Question: $splitText[1]

1️⃣ Choice: $splitText[2]
2️⃣ Choice: $splitText[3]]
$addReactions[2️⃣;1️⃣]

$textSplit[$noMentionMessage;/]

$argsCheck[>0;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < question > / < choice 1 > / < choice 2 >**]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`}