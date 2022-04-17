module.exports = {
name: "notifs",
aliases: "notif",
code: `
$color[1;$getservervar[color]]
$description[1;**[$getUserVar[notif]](https://top.gg/bot/$clientid)**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}

