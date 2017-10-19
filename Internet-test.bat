@echo off
echo Delay 5 minutes for system full start
echo System started %date% %time% >> %HOMEPATH%\Desktop\restart.log
timeout 300
  
:pass1
set x=1
echo Pass 1
2>nul ping 192.168.1.1 | 1>nul 2>&1 findstr "TTL" || set x=error
if %x%==error goto pass2
goto delay

 :pass2
echo Pass 2
set x=1
2>nul ping 192.168.1.1 | 1>nul 2>&1 findstr "TTL" || set x=error
if %x%==error goto pass3
goto delay

 :pass3
set x=1
echo Pass 3
2>nul ping 192.168.1.1 | 1>nul 2>&1 findstr "TTL" || set x=error
if %x%==error goto restart
goto delay
 
 :restart
echo Restart now
echo Internet connection lost %date% %time% >> %HOMEPATH%\Desktop\restart.log
shutdown /r /f /t 00

:delay
echo Delay 5 minutes
timeout 300
goto pass1