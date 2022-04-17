module.exports = {
name: "sethobbies",
aliases: ['sethobbie','sethobby'],
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your hobbies have been set to **$message**]
$setGlobalUserVar[hobbies;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < hobby >**]
$onlyIf[$tolowercase[$checkContains[$message;1;2;3;4;5;6;7;8;9;0;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m;,;.;/;?;>;<;#COLON#;#SEMI#;";-;_;=;+;!;@;#;$;%;^;&;*;(;);\`;~]]==true;$getServerVar[error] You provided an **invalid** hobby]`}