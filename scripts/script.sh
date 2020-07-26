#!/usr/bin/expect -f
set password [lindex $argv 0]

spawn rsync -avzr --delete -e "ssh -i ~/.ssh/gh-actions-key -o StrictHostKeyChecking=no" "./build/" tesc@tesc.ucsd.edu:~/htdocs
expect "tesc@tesc.ucsd.edu's password:"
send "$password\r"

puts "i guess it's done"