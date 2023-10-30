#!/bin/bash

run() {
    npm run watch:css &
    npm run watch:js &
    npx serve
}

run

