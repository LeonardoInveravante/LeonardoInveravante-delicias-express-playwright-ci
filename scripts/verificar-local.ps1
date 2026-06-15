Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "Instalando dependencias..." -ForegroundColor Cyan
npm ci

Write-Host "Ejecutando quality gate local..." -ForegroundColor Cyan
npm run quality

Write-Host "Ejecutando Playwright CI local..." -ForegroundColor Cyan
npm run test:ci

Write-Host "Todo correcto." -ForegroundColor Green
