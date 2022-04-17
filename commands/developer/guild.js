module.exports = {
name: "guilds",
code: `
$createfile[$djsEval[$readfile[guilds.txt];yes];Guild [ $random[100;6003] ].txt]]
$author[1;Guild list;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;** \`\`\`js
$djsEval[$readfile[guilds.txt];yes]\`\`\`**]

$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}