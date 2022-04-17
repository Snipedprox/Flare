module.exports = {
 name: "filter-phone",
 type: "awaited",
 code: `$setServerVar[filters;Phone]
$let[filter;$setFilter[{"aresample": "8000"}]]
$interactionReply[Set music filter to **phone**;;;;;yes]`
}