@echo off
:: Wrapper para ejecutar comandos en WSL desde Windows
wsl zsh -i -c "source ~/.zshrc && nvm use 20 > /dev/null 2>&1 && %*"