#!/bin/sh

set -e

if [ -z "${1%@*}" ] || [ -z "${1#*@}" ]; then
    echo "Please specify a valid ssh connection! (user@host)" >&2
    exit 1
fi

cd "$(dirname "$0")"

if [ "$2" != "--skip-build" ] && [ "$2" != "-s" ]; then
    npm run build
    printf "\n"
fi

ssh "$1" /bin/sh <<'EOF'
rm -rf "$HOME/emexlabs"
EOF

scp -rC ./build "$1:~/emexlabs"

ssh "$1" /bin/sh <<'EOF'
set -e
find "$HOME/emexlabs" -type d -exec chmod 755 {} \;
find "$HOME/emexlabs" -type f -exec chmod 644 {} \;
mv --exchange -T "$HOME/emexlabs" /var/www/emexlabs
rm -rf "$HOME/emexlabs"
EOF

printf "\n\033[32;1mDeployed successfully!\033[0m\n"
