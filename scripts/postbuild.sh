#!/bin/bash

# Copy public assets and static files
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Update start script path in standalone package.json
if sed --version >/dev/null 2>&1; then
    # GNU sed (Linux/GitHub Actions)
    sed -i 's|"start": "node .next/standalone/server.js"|"start": "node server.js"|' .next/standalone/package.json
    sed -i '/"dev":/d; /"build":/d; /"postbuild":/d; /"lint":/d; /"lint-check":/d; /"type-check":/d; /"prepare":/d; /"precommit":/d' .next/standalone/package.json
    sed -i '/"start":/s/,$//' .next/standalone/package.json
else
    # BSD sed (macOS)
    sed -i '' 's|"start": "node .next/standalone/server.js"|"start": "node server.js"|' .next/standalone/package.json
    sed -i '' '/"dev":/d; /"build":/d; /"postbuild":/d; /"lint":/d; /"lint-check":/d; /"type-check":/d; /"prepare":/d; /"precommit":/d' .next/standalone/package.json
    sed -i '' '/"start":/s/,$//' .next/standalone/package.json
fi

echo "Post-build script completed successfully!"
