#!/bin/sh
npm run storybook

if [ $? -ne 0 ]; then
    exit 1
fi

npm run build

if [ $? -ne 0 ]; then
    exit 1
fi

git add dist/ docs/