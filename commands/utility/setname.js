module.exports = {
name: "setname",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your name has been set to **$message**]
$setGlobalUserVar[name;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < name >**]
$onlyIf[$tolowercase[$checkContains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m;.;,;-]]==true;$getServerVar[error] You provided an **invalid** name]`}