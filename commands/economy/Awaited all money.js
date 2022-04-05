module.exports = [{
name:"egivemoney",
type:"awaited",
code:`$setuservar[cash;$sum[$getuservar[cash;$authorID];$getServerVar[sending]];$authorid]`}]

