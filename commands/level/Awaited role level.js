module.exports = [{
name:"givelevel",
type:"awaited",
code:`$setuservar[level;$sum[$getuservar[level;$authorID];$getServerVar[sending]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]`}]