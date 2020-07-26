#!/usr/bin/expect -f
set timeout -1
set password [lindex $argv 0]

spawn rsync -avzr --delete -e ssh ./build/ tesc@tesc.ucsd.edu:~/htdocs/
expect "(yes/no)?"
send "yes\r"

expect "password:"
send "$password\r"

puts "i guess it's done"