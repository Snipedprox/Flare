module.exports = {
 name: "filter-tremolo",
 type: "awaited",
 code: `$setServerVar[filters;Tremolo]
$let[filter;$setFilter[{"tremolo": "2"}]]
$interactionReply[Set music filter to **tremolo**;;;;;yes]`
}