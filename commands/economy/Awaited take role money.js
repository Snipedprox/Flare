module.exports = [{
name:"takemoney",
type:"awaited",
code:`$setuservar[cash;$sub[$getuservar[cash;$authorID];$getServerVar[sending]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]

$onlyIf[$getUserVar[ecobl;$authorid]==false;]`}]