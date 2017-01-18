##Installation:
```
$ npm install date-format-utils
```

## Usages:
```
var dateUtil = require('date-format-utils');

// dateUtil.formatDate(Date,FormatStyle,Timezone);
// Date => 'Timestamp ,date object or date string'
// FormatStyle => 'Format string, e.g. `yyyy-MM-dd HH:mm:ss.SSS`'
// Timezone => 'Timezone of date [Optional]'

console.log(dateUtil.formatDate('1/18/2017, 1:30:00 PM','yyyy-MM-dd HH:mm:ss.SSS tt O',330));
console.log(dateUtil.formatDate(new Date('1/18/2017, 1:30:00 PM'),'yyyy-MM-dd HH:mm:ss.SSS tt O'));
console.log(dateUtil.formatDate(1484726400000,'yyyy-MM-dd HH:mm:ss.SSS tt O'));
```

## Feature:
> * Format date into any format style.
> * Accept timestamp, date string or date object for formatting.
> * Easy to format any date