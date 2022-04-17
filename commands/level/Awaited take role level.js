module.exports = [{
name:"takelevel",
type:"awaited",
code:`$setuservar[level;$sub[$getuservar[level;$authorID];$getServerVar[sending]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]`}]