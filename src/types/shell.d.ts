interface ShellUser {
    login: string
    password: string
    club_id: number
    regional_code?: number
    host?: ShellHost
}

interface ShellError {
    message: string
    path: string[]
    extensions: { code: number }
}

interface ShellResponse {
    data: Merge<Query, Mutation>
    errors?: ShellError[]
}

type ShellHost = 'billing' | 'host'

type ShellToken = string

