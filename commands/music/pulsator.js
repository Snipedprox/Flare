module.exports = {
 name: "filter-pulsator",
 type: "awaited",
 code: `$setServerVar[filters;Pulsator]
$let[filter;$setFilter[{"apulsator": "1"}]]
$interactionReply[Set music filter to **pulsator**;;;;;yes]`
}