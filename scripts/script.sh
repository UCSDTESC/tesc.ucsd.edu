#!/usr/bin/expect -f
spawn "rsync -avzr --delete -e 'ssh -i ~/.ssh/gh-actions-key -o StrictHostKeyChecking=no' 'build/' ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}"
expect "tesc@tesc.ucsd.edu's password:"
send ${{ secrets.SSH_PASSWORD }}