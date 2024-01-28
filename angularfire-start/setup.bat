@REM call Remove-Item -Recurse -Force -Path .\node_modules\
call rmdir /s /q .firebase
call rmdir /s /q .angular 
call rmdir /s /q dist
call rmdir /s /q node_modules

call npm install firebase-tools

call firebase login

call firebase use --add

call npm install @angular/cli

call ng add @angular/fire
