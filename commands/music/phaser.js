module.exports = {
 name: "filter-phaser",
 type: "awaited",
 code: `$setServerVar[filters;Phaser]
$let[filter;$setFilter[{"aphaser": "1"}]]
$interactionReply[Set music filter to **phaser**;;;;;yes]`
}