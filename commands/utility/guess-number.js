 module.exports = ({
    name: "guess-number",
    code: ` $color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **The winning number for GTN is \`$getservervar[winning_number]\`**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing \`manage messages\` permission**]
$suppressErrors`
});