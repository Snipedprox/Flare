module.exports = {
 name: "filter-vaporwave",
 type: "awaited",
 code: `$setServerVar[filters;Vaporwave]
$let[filter;$setFilter[{"asetrate": "48000*0.8"}]]
$interactionReply[Set music filter to **vaporwave**;;;;;yes]`
}