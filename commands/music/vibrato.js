module.exports = {
 name: "filter-vibrato",
 type: "awaited",
 code: `$setServerVar[filters;Vibrato]
$let[filter;$setFilter[{"vibrato": "4"}]]
$interactionReply[Set music filter to **vibrato**;;;;;yes]`
}