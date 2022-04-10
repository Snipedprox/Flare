module.exports = [{
name: "channelnames",
code: `
$forEachGuildChannel[1;{};chans;]`
},{
type: "awaited",
name: "chans",
code: `**
$senddm[$channelName[$channelID];$authorid]**`}]