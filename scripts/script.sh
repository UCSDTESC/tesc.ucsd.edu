#!/usr/bin/expect -f
set timeout 60
set password [lindex $argv 0]

spawn rsync -avzr --delete -e "ssh -i ~/.ssh/gh-actions-key -o StrictHostKeyChecking=no" "./build/" tesc@tesc.ucsd.edu:~/htdocs
expect "password:"
send "$password\r"

puts "i guess it's done"