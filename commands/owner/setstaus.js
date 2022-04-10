module.exports = {
name: "setstatus",
code: `

$setStatus[$message[1];$message[2];$message[3]]

$onlyif[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$tolowercase[$commandname] < text > < type > < presence >\`\`\`]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}