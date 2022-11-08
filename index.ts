export default class color {
    static red(text: string) {
        return `\x1b[31m${text}\x1b[m`
    }
    static green(text: string) {
        return `\x1b[32m${text}\x1b[m`
    }
    static yellow(text: string) {
        return `\x1b[33m${text}\x1b[m`
    }
    static blue(text: string) {
        return `\x1b[34m${text}\x1b[m `
    }
    static magenta(text: string) {
        return `\x1b[35m${text}\x1b[m `
        
    }
    static cyan(text: string) {
        return `\x1b[36m${text}\x1b[m `
    }
    static white(text: string) {
        return `\x1b[37m${text}\x1b[m `
    }
    static gray(text: string) {
        return `\x1b[90m${text}\x1b[m `
    }
    static bold(text: any) { 
        return `\x1b[1m${text}\x1b[m `
    }
    static underline(text: any) { 
        return `\x1b[4m${text}\x1b[m `
    }
    static italic(text: any) { 
        return `\x1b[3m${text}\x1b[m `
    }
    static strikethrough(text: any) {
        return `\x1b[9m${text}\x1b[m `
    }
    
    

    
}

