# 🛠️ `Utils` object

Object with utils

``` TS
const utils = await shell.utils
```
--------------------
## [STATUS: ✅] utils.getTimestamp()

### Description

utils.getTimestamp — Formats to SmartShell compatible date from human readable format

### Usage
```TS
console.log(await shell.utils.getTimestamp()) // Current time and date stamp
console.log(await shell.utils.getTimestamp('2023-10-30')) // Same time at 30 october 2023
console.log(await shell.utils.getTimestamp('TODAY', '20:00:00')) // Today at 20:00
console.log(await shell.utils.getTimestamp('TOMORROW')) // Tomorrow at same time
console.log(await shell.utils.getTimestamp('TOMORROW', 'CURRENT', 3)) // Tomorrow at same time with +3 from system timezone
console.log(await shell.utils.getTimestamp('TOMORROW', 'CURRENT', -5)) // Tomorrow at same time with -5 from system timezone
```

### Output
```JSON
2023-10-14 23:52:59
2023-10-30 23:52:59
2023-10-14 20:00:00
2023-10-15 23:52:59
2023-10-16 02:52:59
2023-10-15 18:52:59
```
--------------------
## [STATUS: ✅] utils.getCurrent()

### Description

utils.getCurrent — Returns current timestamp

### Highly recommends to avoid this method! For getting current timestamp use utils.getTimestamp()

### Usage
```TS
console.log(await shell.utils.getCurrent(0)) // Current time and date stamp with 0 timezone offset
console.log(await shell.utils.getCurrent(3)) // Current time and date stamp with +3 timezone offset
console.log(await shell.utils.getCurrent(3, true)) // Current time and tomorrow date stamp with +3 timezone offset
```

### Output
```JSON
2023-10-15 00:26:38
2023-10-15 03:26:38
2023-10-16 03:26:38
```
--------------------
`@xl-soft/smartshell-io-deno/utils`