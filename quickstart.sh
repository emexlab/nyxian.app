#!/bin/sh

error() {
    echo "Error: $1" >&2
    exit "${2:-1}"
}

cd "$(dirname "$0")" || error "Failed to change directory"
chmod +x ./deploy.sh

apt_install() {
    if ! command -v node >/dev/null; then
        if command -v apt-get >/dev/null; then
            if command -v sudo >/dev/null; then
                sudo apt-get update && sudo apt-get install nodejs -y
            else
                apt-get update && apt-get install nodejs -y
            fi
        else
            error "Couldn't find apt-get, please install nodejs manually"
        fi
    fi
}
apt_install || error "Failed to install nodejs"

if ! npm list >/dev/null 2>&1; then
    npm install || error "npm failed to install required packages" $?
else
    echo "All packages already installed"
fi

printf "\n\033[32;1mYou are now setup!\033[0m\n"
echo "For further guidance check README.md"
