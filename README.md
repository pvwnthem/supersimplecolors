# The most lightweight terminal color package out there


### For ultra-lighweight, no-bloat terminal styling, use sscolors!

![alt](https://i.imgur.com/mpuRznB.gif)





## Highlights
- 0 dependencies
- Lightning fast
- ultra-lighweight at less than 5 kB
- Ablitiy to nest as many styles as you want

## Roadmap
- Automatically check terminal color support
- 256/Truecolor support
- chaining styles
## Installation
```
    npm install sscolors
```
Full typescript ES6 support

## Usage

```javascript
    import color from 'sscolors';
    
    console.log(color.{color}("Hello, world!");)
```

sscolors contains easy to use, composable styling where you can easily chain and nest the styles you want

```javascript
    import color from 'sscolors';
    
    const log = console.log;

    // combined styles and plain text
    log(color.blue('Hello'), 'World', color.red('!'))

    // multiple nested styles
    log(color.blue(color.background.red(color.bold("Hello, world!"))))


    // multiple colors in one string

    log(`
    typescript: ${color.green('75%')}
    python: ${color.yellow('45%')}
    c++: ${color.red('5%')}
    
    `)

```


## Styles

#### Modifiers
- **bold** - make the text bold
- **italic** - make the text italic (not widely supported)
- **underline** - underline the text (not widely supported)
- **strikethrough** - place a horizontal line through the text (not widely supported)


#### Colors
- **black**
- **red**
- **green**
- **yellow**
- **blue**
- **magenta**
- **cyan**
- **white**
- **gray**



#### Backgrounds 
```javascript
    color.background.{color}
```


#### Special modifiers
color.modifier.swapcolors - swaps foreground and background colors

#### animations
color.animation.blinkslow - slow blinking text
color.animation.blinkfast - fast blinking text

## Browser support
sscolors works with most modern browsers

## Why sscolors?
Alternatives like chalk are bulky and don't work well with typescript. sscolors is a clean, lightweight, simple solution for all your terminal styling needs.

# Making CLI apps?

### Try out ts-argparser! A modern, simple argument parser made for typescript!

(https://github.com/pvwnthem/typescript-arg-parser)


