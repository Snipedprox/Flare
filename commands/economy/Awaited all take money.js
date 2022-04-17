module.exports = [{
name:"etakemoney",
type:"awaited",
code:`$setuservar[cash;$sub[$getuservar[cash;$authorID];$getServerVar[sending]];$authorid]
$onlyIf[$getUserVar[ecobl;$authorid]==false;]`}]