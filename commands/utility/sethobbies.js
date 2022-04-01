module.exports = {
name: "sethobbies",
$if: "v4",
aliases: ['sethobbie','sethobby'],
code: `
<:noted:953980420519768105> **$username** Your hobbies have been set to **$message**
$setGlobalUserVar[hobbies;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [height]\`**}}]
$onlyIf[$tolowercase[$checkContains[$message;1;2;3;4;5;6;7;8;9;0;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m;,;.;/;?;>;<;#COLON#;#SEMI#;";-;_;=;+;!;@;#;$;%;^;&;*;(;);\`;~]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [valid hobby]\`**}}]`}