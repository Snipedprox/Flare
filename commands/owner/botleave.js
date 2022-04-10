module.exports = {
name: "botleave",
code: `

$botLeave[$message]
$author[1;Leaving guild;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Left \`$servername[$message]\`]
$onlyif[$charCount[$message]>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < guildID >\`\`\`]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}