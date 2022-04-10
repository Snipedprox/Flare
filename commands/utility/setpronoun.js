module.exports = {
name: "setpronoun",
aliases: ['setpronouns','pronouns','pronoun'],
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  Your pronoun has been set to **$message**]
$setGlobalUserVar[pronouns;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < pronoun >**]
$onlyIf[$tolowercase[$checkContains[$message;all;another;any;anybody;anyone;anything;both;each;eachother;either;everybody;everyone;everything;few;he;her;hers;herself;him;himself;his;I;it;its;itself;little;many;me;mine;more;most;much;my;myself;neither;noone;nobody;none;nothing;one;oneanother;other;others;our;ours;ourselves;several;she;some;somebody;someone;something;that;their;theirs;them;themselves;these;they;this;those;us;we;what;whatever;which;whichever;who;whoever;whom;whomever;whose;you;your;yours;yourself;yourselves;/;\]]==true;$getServerVar[error] You provided an **invalid** pronoun]`}