module.exports = {
name: "uptime",
code: `
$color[1;$getServerVar[color]]
$description[1;$getservervar[check] **I have been online for $uptime**]`}