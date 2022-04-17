module.exports = {
name: "setnickname",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your nickname has been set to **$message**]
$setGlobalUserVar[nickname;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < nickname >**]
$onlyIf[$tolowercase[$checkContains[$message;.;,;/;-;+;=;_;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m]]==true;$getServerVar[error] You provided an **invalid** nickname]`}