module.exports = {
  name: "say",
  $if: "v4",
  code: `$if[$checkContains[$message;@here;@everyone;<@&]==false]
  **$message**
  $deletecommand
  $endif
  $suppressErrors
  $if[$checkContains[$message;@here;@everyone;<@&]==true]
 $color[1;$getservervar[color]]
$description[1;**<:reddx:953987871319162890> Don't use me to ping roles or everyone**]
 $endif
 `
}