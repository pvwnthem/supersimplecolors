


export default class color {

    static background = class {
        static red(text: any) {
            return `\x1b[41m${text}\x1b[m`
           
         }
         static green(text: any) {
            return `\x1b[42m${text}\x1b[m`
         }
         static yellow(text: any) {
            return `\x1b[43m${text}\x1b[m`
         }
         static blue(text: any) {
            return `\x1b[44m${text}\x1b[m`
         }
         static magenta(text: any) {
            return `\x1b[45m${text}\x1b[m`
         }
         static cyan(text: any) {
            return `\x1b[46m${text}\x1b[m`
         }
         static white(text: any) {
            return `\x1b[37m${text}\x1b[m`
         }
         static black(text: any) {
            return `\x1b[30m${text}\x1b[m`
         }
    }
    static animation = class {
        static blinkslow(text: any) { 
            return `\x1b[5m${text}\x1b[m `
        }
        static blinkfast(text: any) { 
            return `\x1b[6m${text}\x1b[m `
        }
    }
    static modifier = class {
        static swapcolors(text: any) {
            return `\x1b[7m${text}\x1b[m `
        }
    }



        
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
