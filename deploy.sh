#!/bin/bash

# Script para desplegar automáticamente a GitHub Pages
echo "🚀 Iniciando despliegue automático..."

# Verificar si hay cambios
if [[ -z $(git status --porcelain) ]]; then
    echo "❌ No hay cambios para commitear"
    exit 1
fi

# Hacer commit de todos los cambios
echo "📝 Haciendo commit de los cambios..."
git add .
git commit -m "Actualización automática: $(date '+%Y-%m-%d %H:%M:%S')"

# Push a main
echo "⬆️ Subiendo cambios a main..."
git push origin main

# Desplegar a GitHub Pages
echo "🌐 Desplegando a GitHub Pages..."
ng deploy --base-href=https://rudymontenegro.github.io/MyFolioWeb/

echo "✅ Despliegue completado!"
echo "🌍 Tu sitio estará disponible en: https://rudymontenegro.github.io/MyFolioWeb/"
