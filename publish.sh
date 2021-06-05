set -e

git clean -dfX
yarn
yarn build
npm publish --access public
