#Overview

date-format is dead simple extend of basic Date object to support some PHP like formatting for dates.

**Please notice**: extending the native objects is usually considered as a bad practice.
However in this case the functionality that will be added to each Date object is small, 
and very unlikely any other script or library will use this method.
Still use with caution ))

If you need full-featured solid library to work with dates, there is a http://momentjs.com/ library which is awesome!
This project is a simple helper for simple dates formatting.

# Usage

To use this script just add it to your page.

Create a new Date object as usual:
```JavaScript
var d = new Date();
```

And when you need the date to be formatted, just use *format* method with format string as you like:
```JavaScript
d.format('d-m-Y'); // 18-09-2016
```

# Supported format characters

Format characters were taken from PHP date.

+ **d** - day of the month, 2 digits with leading zeros (01 - 31)
+ **m** - month of the year, numerical - 2 digits with leading zeros (01 - 12)
+ **M** - month in 3-letter textual representation (English only) - (Jan - Dec)
+ **F** - month in full textual representation (English only) - (January - December)
+ **y** - last 2 digits of year (16)
+ **Y** - full four digits year (2016)
+ **H** - 24-hour format with leading zeros (12)
+ **i** - minutes with leading zeros (05)
+ **s** - seconds with leading zeros (28)
