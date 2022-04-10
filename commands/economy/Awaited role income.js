module.exports = [{
name:"roleincome",
type:"awaited",
code:`

$djseval[setInterval(() => aoi(d, '$forEachMember[1;{};roleic;] $if[$hasRoles[$guildid;$authorid;$getServerVar[ri1]]==true;
$setUserVar[cash;$sum[$getUserVar[cash;$authorid];$getServerVar[r1i]];$authorid]]


$if[$hasRoles[$guildid;$authorid;$getServerVar[ri2]]==true;
$setUserVar[cash;$sum[$getUserVar[cash;$authorid];$getServerVar[r2i]];$authorid]]


$if[$hasRoles[$guildid;$authorid;$getServerVar[ri3]]==true;
$setUserVar[cash;$sum[$getUserVar[cash;$authorid];$getServerVar[r3i]];$authorid]]

$if[$hasRoles[$guildid;$authorid;$getServerVar[ri4]]==true;
$setUserVar[cash;$sum[$getUserVar[cash;$authorid];$getServerVar[r4i]];$authorid]]

$if[$hasRoles[$guildid;$authorid;$getServerVar[ri5]]==true;
$setUserVar[cash;$sum[$getUserVar[cash;$authorid];$getServerVar[r5i]];$authorid]]

', false, false, false), 2000)]



`}]