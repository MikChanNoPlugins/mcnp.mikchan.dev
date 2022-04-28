cd dist

git init
git add -A
git commit -m Deploy
git push -f https://github.com/MikChanNoPlugins/mikchannoplugins.github.io.git master:gh-pages

cd ..