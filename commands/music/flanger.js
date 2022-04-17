module.exports = {
 name: "filter-flanger",
 type: "awaited",
 code: `$setServerVar[filters;Flanger]
$let[filter;$setFilter[{"flanger": "1"}]]
$interactionReply[Set music filter to **flanger**;;;;;yes]`
}