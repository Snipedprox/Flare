 module.exports = ({
    name: "guess-number",
    code: ` **<a:D_tick:953783189971816530> The winning number for GTN is** \`$getservervar[winning_number]\`
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[ownerole];$getServerVar[staffrole]]==true;]
$suppressErrors`
});