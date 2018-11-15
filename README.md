# TimeDisplay
Simple class to conver unix epoch times to strings.


Usage:
- How to create a new instance of TimeDisplay:

let potato = new TimeDisplay("1528983666");

- How to get the string:

let newString = potato.timeString();

// output: 5 mins 10 secs


# Change Log:
Version 1.2 15th November 2018:
- Added function "getDefaultString()" this has replaced the ugly copy and paste code that was used before, and there for is much easier to modify to your needs. It also checks if the second value is 0 and ignores it if that is the case.
- Added support for character arguments for function "getUnitString()", you can now pass "s" for the first argument instead of 0 for seconds, "m" for minutes instead of 1 and so on.
- Function "timeString()" no longer returns a blank value string for the second value of a time string. e.g 13 minutes and seconds.
