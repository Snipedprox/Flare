module.exports = {
name: "file",
code: `
$createfile[$commandinfo[$message;code];$commandinfo[$message;name].js]
$author[1;File found;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
\`\`\`js
$commandinfo[$message;code]\`\`\`]
$onlyif[$charCount[$message]>0;$getServerVar[error] **Correct usage:** \`\`\`js
$tolowercase[$commandname] < file name >\`\`\`]
$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}