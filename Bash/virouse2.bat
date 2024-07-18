@echo off
color 55

echo "do you like me (:  ... ?"
echo "yes/no"

set /p like =

if %like% == yes goto like
if %like% == no goto virse

:like
echo "anl i am like for you (:...<>"
echo "see you soon my friend ...."
pause
exit
:virse
echo "omg!!! "
echo "i well hack you for 10 seconds"
timeout 10
shutdown -s -t 100
