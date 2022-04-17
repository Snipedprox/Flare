module.exports = [{
name:"givexp",
type:"awaited",
code:`$setuservar[xp;$sum[$getuservar[xp;$authorID];$getServerVar[sending]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]`}]