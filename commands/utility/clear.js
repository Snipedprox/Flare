module.exports = {
name: "clear",
code: `
$clear[$message]
$onlyIf[$isNumber[$message]==true;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username That number is invalid**}}]
$onlyIf[$message<101;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username You can not delete more than 100 messages**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username you need \`manage_server\` permissions**}}]


$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username i need \`manage_server\` permissions**}}]`}