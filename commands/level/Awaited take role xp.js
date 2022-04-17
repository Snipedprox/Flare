module.exports = [{
name:"takexp",
type:"awaited",
code:`$setuservar[xp;$sub[$getuservar[xp;$authorID];$getServerVar[xp]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]`}]