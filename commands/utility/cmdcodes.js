module.exports = {
name: "cmdcodes",
aliases: ['codescmd','cmd-codes','codes-cmd','code-cmd','codecmd','cmd-code','cmdcode'],
usage: "cmdcodes",
code: `
$author[1;add-cmd / tag codes;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
**\`{server.name}\` - Displays server name**
**\`{server.icon}\` - Displays server icon**
**\`{user.avatar}\` - Displays user avatar**
**\`{user.mention}\` - Mentions the user**
**\`{user.tag}\` - Displays user tag**
**\`{client.ping}\` - Displays my ping**
**\`{client.cpu}\` - Displays my cpu**
**\`{client.avatar}\` - Displays my avatar**
**\`{server.members}\` - Displays server members + bots count**
**\`{server.humans}\` - Displays server humans count**
**\`{server.bots}\` - Displays server bots count**
**\`{client.uptime}\` - Displays my uptime**
**\`{user.platform}\` - Displays user platform**
**\`{client.platform}\` - Displays my platform**
**\`{client.activity}\` - Displays my activity**
**\`{user.activity}\` - Displays user activity**]`}