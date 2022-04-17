module.exports = {
  name: "say",
  $if: "v4",
  code: `$if[$checkContains[$message;@here;@everyone;<@&]==false]
 $message
  $deletecommand
  $endif
  $suppressErrors
  $if[$checkContains[$message;@here;@everyone;<@&]==true]
<:ZeroWorried:955637230939033660> **$username** Don't ping anyone
 $endif
 `
}