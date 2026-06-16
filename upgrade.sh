#!/bin/bash
set -e
git fetch && git checkout v/${VALTIMO_RELEASE_MAJOR_VERSION} && git pull
sed -E -i.bak 's/"@valtimo\/([a-z0-9_-]+)".+/"@valtimo\/\1": "'${VALTIMO_RELEASE_VERSION}'",/' package.json && rm -f package.json.bak
npm i
git add package.json package-lock.json
if git diff --cached --quiet; then
    echo "Already at ${VALTIMO_RELEASE_VERSION} — nothing to commit."
else
    git commit -m "Upgrade to ${VALTIMO_RELEASE_VERSION}"
    git push
fi
