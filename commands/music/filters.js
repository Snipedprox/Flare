module.exports = [{
name: "filter",
$if: "v4",
aliases: ['filters','filt'],
usage: "filter < filter >",
code: `
$if[$message[1]==]
$reply[$messageID;no]
$addField[1;Filters;**$getServerVar[filters]**;no]
$addField[1;Filter;$getVar[listfilters];yes]
$addTimestamp[1;$dateStamp]
$footer[1;filter <filter> (value optional) / selectmenu]
$color[1;$getVar[color]]
$addSelectMenu[1;filter;List Filters;1;1;no;Remove:Remove Filteroff:no;Bass-only:Apply Bass-only Filter:bassonly:no;Clarity:Apply Clarity Filter:clarity:no;Echo:Apply Echo Filter:echo:no;Flanger:Apply Flanger Filter:flanger:no;Deep:Apply Haas Filter:haas:no;Gate:Apply Gate Filter:gate:no;Nightcore:Apply Nightcore Filter:nightcore:no;Phaser:Apply Phaser Filter:phaser:no;Phone:Apply Phone Filter:phone:no;Pulsator:Apply Pulsator Filter:pulsator:no;Reverb:Apply Reverb Filter:reverb:no;Tremolo:Apply Tremolo Filter:tremolo:no;Subboost:Apply Subboost Filter:subboost:no;Vaporwave:Apply Vaporwave Filter:vaporwave:no;Vibrato:Apply Vibrato Filter:vibrato:no]
$elseIf[$toLowercase[$message[1]]==nightcore]
$setServerVar[filters;Nightcore]
$let[filter;$setFilter[{"atempo": "0.720", "asetrate": "48000*1.3"}]]
$sendMessage[$getServerVar[check] Changed filter to  **nightcore**;no]
$endelseif
$elseIf[$checkContains[$toLowercase[$message[1]];remove;clear;reset;off]==true]
$setServerVar[filters;$getVar[filters]]
$let[filter;$resetFilters]
$sendMessage[Reseted filters;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==tempo]
$setServerVar[filters;Tempo | $replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]]
$let[filter;$setFilter[{"atempo": "$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]"}]]
$sendMessage[$getServerVar[check] Changed filter to  **tempo** with value **$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]**;no]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]<=4;Max **4**]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]>=0.5;Min **0.5**]
$endelseif
$elseIf[$toLowercase[$message[1]]==pitch]
$setServerVar[filters;Pitch | $replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]]
$let[filter;$setFilter[{"asetrate": "48000*$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]"}]]
$sendMessage[$getServerVar[check] Changed filter to  **pitch** with value **$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]**;no]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]<=2;Max **2**]
$onlyIf[$replaceText[$replaceText[$checkCondition[$message[2]==];true;1.05];false;$message[2]]>=0.5;Min **0.5**]
$endelseif
$elseIf[$toLowercase[$message[1]]==deep]
$setServerVar[filters;Deep]
$let[filter;$setFilter[{"atempo": "1.15", "asetrate": "48000*0.8"}]]
$sendMessage[$getServerVar[check] Changed filter to  **deep**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==bassonly]
$setServerVar[filters;Bass-only]
$let[filter;$setFilter[{"aresample": "1000"}]]
$sendMessage[$getServerVar[check] Changed filter to  **bassonly**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==phone]
$setServerVar[filters;Phone]
$let[filter;$setFilter[{"aresample": "8000"}]]
$sendMessage[$getServerVar[check] Changed filter to  **phone**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==vibrato]
$setServerVar[filters;Vibrato]
$let[filter;$setFilter[{"vibrato": "4"}]]
$sendMessage[$getServerVar[check] Changed filter to  **vibrato**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==flanger]
$setServerVar[filters;Flanger]
$let[filter;$setFilter[{"flanger": "1"}]]
$sendMessage[$getServerVar[check] Changed filter to  **flanger**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==echo]
$setServerVar[filters;Echo]
$let[filter;$setFilter[{"aecho": "1.0:0.5:30:0.9"}]]
$sendMessage[$getServerVar[check] Changed filter to  **echo**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==reverb]
$setServerVar[filters;Reverb]
$let[filter;$setFilter[{"aecho": "1.0:0.8:5:0.5"}]]
$sendMessage[$getServerVar[check] Changed filter to  **reverb**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==tremolo]
$setServerVar[filters;Tremolo]
$let[filter;$setFilter[{"tremolo": "2"}]]
$sendMessage[$getServerVar[check] Changed filter to  **tremolo**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==haas]
$setServerVar[filters;Haas]
$let[filter;$setFilter[{"haas": "1"}]]
$sendMessage[$getServerVar[check] Changed filter to  **haas**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==subboost]
$setServerVar[filters;Subboost]
$let[filter;$setFilter[{"asubboost": "0.75"}]]
$sendMessage[$getServerVar[check] Changed filter to  **subboost**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==clarity]
$setServerVar[filters;Clarity]
$let[filter;$setFilter[{"aecho": "1.0:0.7:0.1:0.7"}]]
$sendMessage[$getServerVar[check] Changed filter to  **clarity**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==vaporwave]
$setServerVar[filters;Vaporwave]
$let[filter;$setFilter[{"asetrate": "48000*0.8"}]]
$sendMessage[$getServerVar[check] Changed filter to  **vaporwave**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==phaser]
$setServerVar[filters;Phaser]
$let[filter;$setFilter[{"aphaser": "1"}]]
$sendMessage[$getServerVar[check] Changed filter to  **phaser**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==pulsator]
$setServerVar[filters;Pulsator]
$let[filter;$setFilter[{"apulsator": "1"}]]
$sendMessage[$getServerVar[check] Changed filter to  **pulsator**;no]
$endelseif
$elseIf[$toLowercase[$message[1]]==gate]
$setServerVar[filters;Gate]
$let[filter;$setFilter[{"agate": "1"}]]
$sendMessage[$getServerVar[check] Changed filter to  **gate**;no]
$endelseif
$endif
$onlyIf[$queueLength!=0;$getVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getVar[errorjoin]]`}]