module.exports = {
name: "https",
aliases: "http",
usage: "http < code >",
code: `
**( \`$message\` )** 
\`\`\`js
$djsEval[require('http-status')['$message_MESSAGE'];yes]\`\`\`

$onlyIf[$isNumber[$message]==true;**$getservervar[error] $username You provided an invalid number**]

$onlyIf[$message!=;**$getServerVar[error] $username You need to provide a code**]

$onlyIf[$checkContains[$message;100;101;102;103;122;200;201;202;203;204;205;206;207;208;226;300;301;302;303;304;305;306;307;308;400;401;402;403;404;405;406;407;408;409;410;412;413;414;415;415;416;417;418;420;422;423;424;426;428;429;431;444;449;450;451;499;500;501;502;503;504;505;506;507;508;509;510;511;599;598]==true;**$getServerVar[error] $username Invalid \`HTTPS\` code**]`} 
