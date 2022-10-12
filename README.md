# Important 🤫

This is web messenger build on typescript,scss
and own Template Engine which build on Regexp and typescript classes.

## Installation

On start clone repository and install all dependencies

```bash
git clone https://github.com/Filimonsha/cubegramm.git
npm i
```
So if you want to run dev application just write
```bash
npm run dev
//Or buid project
npm run build
```

## Usage template engine 😇

For creating template you can just create instance of Template class

```js
    export const defaultBtnTemplate = new Template(`
    <button class="btn">
       <span class="btn_text">
         {{!text!}}
        </span>
     </button>
    `)
```
If you want to dynamical render constructions use " { { } } "
There you can render variables, condition :
```js
export const messageTemplate = new Template(`
        <div class="message {{ if ( !user! ==="home") then {message__my} }} ">
            {{ !messageText! }}
        </div>
`)
```


## License
![img.png](img.png)