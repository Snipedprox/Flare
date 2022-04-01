module.exports = {
name: "roleid",
code: `
<:xelanoted:952137244821561357> **Role id: \`$findRole[$message]\`**
$onlyIf[$findRole[$message]!=;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Please specify a role**}}]`}