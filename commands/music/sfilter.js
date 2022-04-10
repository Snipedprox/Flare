module.exports = [{
 name: "filter",
 type: "interaction",
 prototype: "selectMenu",
 code: `$if[$interactionData[values[0]]==nightcore;{execute:filter-nightcore};]
$if[$checkContains[$interactionData[values[0]];remove;clear;reset;off]==true;{execute:filter-remove};]
$if[$interactionData[values[0]]==deep;{execute:filter-deep};]
$if[$interactionData[values[0]]==bassonly;{execute:filter-bassonly};]
$if[$interactionData[values[0]]==phone;{execute:filter-phone};]
$if[$interactionData[values[0]]==vibrato;{execute:filter-vibrato};]
$if[$interactionData[values[0]]==flanger;{execute:filter-flanger};]
$if[$interactionData[values[0]]==echo;{execute:filter-echo};]
$if[$interactionData[values[0]]==reverb;{execute:filter-reverb};]
$if[$interactionData[values[0]]==tremolo;{execute:filter-tremolo};]
$if[$interactionData[values[0]]==haas;{execute:filter-haas};]
$if[$interactionData[values[0]]==subboost;{execute:filter-subboost};]
$if[$interactionData[values[0]]==clarity;{execute:filter-clarity};]
$if[$interactionData[values[0]]==vaporwave;{execute:filter-vaporwave};]
$if[$interactionData[values[0]]==phaser;{execute:filter-phaser};]
$if[$interactionData[values[0]]==pulsator;{execute:filter-pulsator};]
$if[$interactionData[values[0]]==gate;{execute:filter-gate};]
$onlyIf[$checkCondition[$voiceID[$interactionData[author.id]]==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID[$interactionData[author.id]]];false;$voiceID[$clientID]]]==true;]
$onlyIf[$queueLength!=0;]
$onlyIf[$voiceID[$interactionData[author.id]]!=;]`}]