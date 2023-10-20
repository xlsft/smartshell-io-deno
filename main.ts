import { SmartShell } from "./mod.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();

const shell = await new SmartShell({
    login: env['login'],
    password: env['password'],
    club_id: Number(env['club_id'])
})
