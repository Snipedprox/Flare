module.exports = {
name: "sname",
aliases: ['same','sane'],
code: `
$color[1;$getServerVar[color]]
$description[1;**<:xelawholesome:952139611746992178> Name has been changed to \`$message\`**]
$setBotUsername[$message]

$onlyIf[$message]!=;<:xelamhm:952137241336102912> **$username** Specify a name]

$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}