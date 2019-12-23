#!/bin/bash
set -eu

SSHPATH="$HOME/.ssh"
mkdir "$SSHPATH"
echo "$DEPLOY_KEY" >> "$SSHPATH/authorized_keys"
chmod 0644 "$SSHPATH/authorized_keys"
SERVER_DEPLOY_STRING="$USERNAME@$SERVER_IP:$SERVER_DESTINATION"

rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress $GITHUB_WORKSPACE/$FOLDER tesc@tesc.ucsd.edu:panda-test/
