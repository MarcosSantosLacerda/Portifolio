@echo off
set "PATH=%PATH%;C:\Program Files\nodejs"
cd /d "%~dp0"
echo ===================================================
echo Iniciando Portfolio em modo de desenvolvimento...
echo Abrindo em http://localhost:5173
echo ===================================================
call npm run dev
pause
