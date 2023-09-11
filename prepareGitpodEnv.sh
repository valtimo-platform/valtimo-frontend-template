#!/bin/sh

set -o allexport
source .gitpod.env.properties
set +o allexport

envsubst < src/assets/config.template.js > src/assets/config.js
envsubst < conf/proxy.conf.template.json > conf/proxy.conf.json
