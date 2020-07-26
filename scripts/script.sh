#!/usr/bin/expect -f
ls
echo ${{ secrets.SERVER_DESTINATION }}
spawn "rsync -avzr --delete -e 'ssh -i ~/.ssh/gh-actions-key -o StrictHostKeyChecking=no' './build/' tesc@tesc.ucsd.edu:~/htdocs"
expect "tesc@tesc.ucsd.edu's password:"
send ${{ secrets.SSH_PASSWORD }}
