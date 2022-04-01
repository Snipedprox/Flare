module.exports = {
name: "guilds",
code: `


$color[1;$getServerVar[color]]

$author[1;Server list]

$description[1;** \`\`\`js
$djsEval[$readfile[guilds.txt];yes]\`\`\`**]

$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}