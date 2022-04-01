module.exports = {
name: "setstatus",
code: `

$setStatus[$message[1];$message[2];$message[3]]

$onlyif[$charCount[$message]>2;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [text] [type] [presence]\`**}}]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}