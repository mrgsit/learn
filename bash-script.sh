#!/bin/bash

if [ "`asterisk -rx "sip show registry" | grep -c Registered`" -eq "1" ]
then
    exit
else
    echo "connection lost at `date`" > /root/asterisk.txt
    service asterisk stop
    sleep 100
    service asterisk start
fi
exit 0