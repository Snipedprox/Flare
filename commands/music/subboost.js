module.exports = {
 name: "filter-subboost",
 type: "awaited",
 code: `$setServerVar[filters;Subboost]
$let[filter;$setFilter[{"asubboost": "0.75"}]]
$interactionReply[Set music filter to **subboost**;;;;;yes]`
}