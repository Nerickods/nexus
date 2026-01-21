# 🤖 WSL Agent Protocol (Critical Info)

Este documento contiene la **información clave** que cualquier Agente de IA necesita saber para operar en este repositorio.

## 🚨 El Problema: Entorno Híbrido Windows/WSL
Este proyecto vive en **WSL (Ubuntu)** pero el agente corre en **Windows**.
- ❌ **No funcionan**: Comandos directos de Windows (`npm`, `node`, `ls`) fallan o usan versiones incorrectas.
- ❌ **No funcionan**: Comandos `wsl <cmd>` simples fallan si dependen de `nvm` o variables de entorno del usuario.

## ✅ La Solución: Wrapper `w.bat`
Se ha creado un "alias" o wrapper en la raíz del proyecto llamado `w.bat`.

### Sintaxis
Siempre que necesites ejecutar un comando de terminal, usa:
```powershell
./w <comando_linux>
```

### Ejemplos
| Intención | ❌ Incorrecto | ✅ Correcto (Usando Alias) |
|-----------|---------------|----------------------------|
| Instalar dependencias | `npm install` | `./w npm install` |
| Correr servidor | `npm run dev` | `./w npm run dev` |
| Verificar archivos | `ls -la` | `./w ls -la` |
| Git commit | `git commit -m "..."` | `./w git commit -m "..."`* |

*> Nota: Git puede funcionar desde Windows si está configurado, pero para scripts del repo, usa `./w`.*
