module.exports = [{
name:"egivemoney",
type:"awaited",
code:`$setuservar[cash;$sum[$getuservar[cash;$authorID];$message];$authorid]
$onlyIf[$getUserVar[ecobl;$authorid]==false;]`}]

