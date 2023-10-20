declare global {
    interface String {
        removeCharsBefore(char: string): string;
        removeCharsAfter(char: string): string;
    }
}

export {};