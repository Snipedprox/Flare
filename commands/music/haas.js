module.exports = {
 name: "filter-haas",
 type: "awaited",
 code: `$setServerVar[filters;Haas]
$let[filter;$setFilter[{"haas": "1"}]]
$interactionReply[Set music filter to **haas**;;;;;yes]`
}