
# Maintaining guide

## Changing js or css

Changes should be made in `/css` and `/js`, but path of the files should be set to `/dest/css` or `/dest/js`. This is because the js and css in this website are all compiled using babel, and compiled script will be automatically put in `/dest`, this also means changes wont show up until its compiled.

 To compile and develop, please first make sure you have `npm` and `npx` installed, and then run 
```sh
./run.sh
```
This will compile when any changes are made, and will host the website. This only need to be executed once, because it will automatically compile on any changes, and stop this when finished building using `ctrl + c`.

### REMEMBER ALWAYS RUN THIS WHEN DEVELOPING!!! 

## Safety
### THIS IS VERY IMPORTANT, always follow these instructions!!!
- `Directory listing`: Any new directories added must include a index.html, which can be blank or anything.
- `Cross site scripting(XSS)`: When setting the text inside a element using js, NEVER use `element.innerHtml`, instead, use `element.textContent`.
- `Bad http respond`: When fetching from api using `fetch()`, always add a `.catch`, just in case that some errors happen.

## Changing URLs
If the URL of the `google form`, `calender`, or `google script api` need to be changed, change the consts at the top of the files.
Heres the name of url and the variable name:
- `google forms` - `formURL`
- `google calemders` - `calURL`
- `google script apis` - `apiURL`