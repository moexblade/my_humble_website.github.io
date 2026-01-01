#!/usr/bin/env bash
set -e

# Install Flutter to $HOME/flutter if not already present
if [ ! -d "$HOME/flutter" ]; then
  git clone https://github.com/flutter/flutter.git -b stable "$HOME/flutter"
fi

export PATH="$HOME/flutter/bin:$PATH"

# Ensure flutter is ready and web is enabled
flutter --version
flutter channel stable
flutter upgrade --force
flutter config --enable-web
flutter precache --web

# Run pub get and build the web release
flutter pub get
flutter build web --release