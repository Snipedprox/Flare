module.exports = {
name: "file",
code: `
$createfile[$commandinfo[$message;code];$commandinfo[$message;name].js]
$color[1;$getServerVar[color]]
$description[1;
\`\`\`js
$commandinfo[$message;code]\`\`\`]
$onlyif[$charCount[$message]>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [file name]\`**}}]
$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}