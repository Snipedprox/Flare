module.exports = {
name: "setbirthday",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your birthday has been set to **$message**]
$setGlobalUserVar[birthday;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < date >**]

$onlyIf[$tolowercase[$checkContains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m;;-;/;1;2;3;4;5;6;7;8;9;0]]==true;$getServerVar[error] You provided an **invalid** date]`}