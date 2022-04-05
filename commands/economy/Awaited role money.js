module.exports = [{
name:"givemoney",
type:"awaited",
code:`$setuservar[cash;$sum[$getuservar[cash;$authorID];$getServerVar[sending]];$authorid]
$onlyif[$hasroles[$guildid;$authorid;$findrole[$message[2]]]==true;]`}]