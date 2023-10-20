export const utils = {
    /**
     * # `utils.getTimestamp()`
     * 
     * Formats to smartshell compatible date from human readable format
     * 
     * 
     * ``` ts
     * console.log(await shell.utils.getTimestamp()) // Current time and date stamp
     * console.log(await shell.utils.getTimestamp('2023-10-30')) // Same time at 30 october 2023
     * console.log(await shell.utils.getTimestamp('TODAY', '20:00:00')) // Today at 20:00
     * console.log(await shell.utils.getTimestamp('TOMORROW')) // Tomorrow at same time
     * console.log(await shell.utils.getTimestamp('TOMORROW', 'CURRENT', 3)) // Tomorrow at same time with +3 from system timezone
     * console.log(await shell.utils.getTimestamp('TOMORROW', 'CURRENT', -5)) // Tomorrow at same time with -5 from system timezone
     * ```
     * `@xl-soft/smartshell-io-deno/utils`
     */
    getTimestamp: (date: DateAndNotations = 'TODAY', time: Time = 'CURRENT', zone: Timezone = 0) => {
        let datestr: DateAndNotations | string = date
        let timestr: DateAndNotations | string = time
        if (date === 'TODAY') {
            datestr = utils.getCurrent(zone || 0).split(' ')[0]
        }
        if (date === 'TOMORROW') {
            datestr = utils.getCurrent(zone || 0, true).split(' ')[0]
        }
        if (time === 'CURRENT') {
            timestr = utils.getCurrent(zone || 0).split(' ')[1]
        }
        return `${datestr} ${timestr}`
    },

    /**
     * # `utils.getCurrent()`
     * 
     * Returns current timestamp
     * 
     * ### Highly recommends to avoid this method! For getting current timestamp use utils.getTimestamp()
     * 
     * ``` ts
     * console.log(await shell.utils.getCurrent(0)) // Current time and date stamp with 0 timezone offset
     * console.log(await shell.utils.getCurrent(3)) // Current time and date stamp with +3 timezone offset
     * console.log(await shell.utils.getCurrent(3, true)) // Current time and tomorrow date stamp with +3 timezone offset
     * ```
     * `@xl-soft/smartshell-io-deno/utils`
     */
    getCurrent: (timezoneOffset: Timezone, tomorrow = false): string => {
        const date = new Date();
        if (tomorrow == true) date.setDate(date.getDate() + 1)
        const localTimezoneOffset = date.getTimezoneOffset() * 60;
        const targetTimezoneOffset = timezoneOffset * 3600;
        const targetTime = date.getTime() + (targetTimezoneOffset - localTimezoneOffset) * 1000;
        const targettedTime = new Date(targetTime);
        const year = targettedTime.getUTCFullYear();
        const month = String(targettedTime.getUTCMonth() + 1).padStart(2, "0");
        const day = String(targettedTime.getUTCDate()).padStart(2, "0");
        const hours = String(targettedTime.getUTCHours()).padStart(2, "0");
        const minutes = String(targettedTime.getUTCMinutes()).padStart(2, "0");
        const seconds = String(targettedTime.getUTCSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}