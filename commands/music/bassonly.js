module.exports = {
 name: "filter-bassonly",
 type: "awaited",
 code: `$setServerVar[filters;Bass-only]
$let[filter;$setFilter[{"aresample": "1000"}]]
$interactionReply[Set music filter to **bassonly**;;;;;yes]`
}
