---
title: Badge
description: Badges show a status, count, or label.
permalink: /component-library/badge.html
---

## Considerations

If badges contain just a number or text that requires extra context, you should provide that context with a visually-hidden element. For example, a badge on a mail icon displaying "12" should read `12 <span class="u-hide-visually">unread messages</span>` so that assistive tech understands the intent. Or to be even more clear, include the label visible inside the badge: `12 unread messages`

Badge text is often atomic and text wrapping to a new line is not ideal. Test your use case and consider preventing line breaks (use the `badge--no-break` class).

## Examples

### Various Badges

::preview{file="badges/basic.html" title="Various Badges" id=example_basic}::
