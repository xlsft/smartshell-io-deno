import { datetime } from "../../deps.ts";

export function getDateFromUnix(unix: number): string {
    const dt = datetime(unix*1000)
    return dt.format("YYYY-MM-dd HH:mm:ss")
}

export function getCurrent(): number {
    const dt = datetime(new Date())
    return Number(dt.format('X').split('.')[0])-10800
}