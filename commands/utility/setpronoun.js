module.exports = {
name: "setpronoun",
$if: "v4",
aliases: ['setpronouns','pronouns','pronoun'],
code: `
<:noted:953980420519768105> **$username** Your pronoun has been set to **$message**
$setGlobalUserVar[pronouns;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [pronoun]\`**}}]
$onlyIf[$tolowercase[$checkContains[$message;all;another;any;anybody;anyone;anything;both;each;eachother;either;everybody;everyone;everything;few;he;her;hers;herself;him;himself;his;I;it;its;itself;little;many;me;mine;more;most;much;my;myself;neither;noone;nobody;none;nothing;one;oneanother;other;others;our;ours;ourselves;several;she;some;somebody;someone;something;that;their;theirs;them;themselves;these;they;this;those;us;we;what;whatever;which;whichever;who;whoever;whom;whomever;whose;you;your;yours;yourself;yourselves;/;\]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Invalid pronoun**}}]`}