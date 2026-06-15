Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$usuario = "LeonardoInveravante"
$repositorio = "delicias-express-playwright-ci"
$rutaProyecto = "C:\Users\leonardo.sacnhezp\Documents\0.Trabajo\3. Cursos\3.Curso de Playwright\05_PLAYWRIGHT_CICD\Laboratorio Alumnos\delicias-express-web"

Set-Location $rutaProyecto

if (-not (Test-Path ".git")) {
  git init
}

git status

git add .

git commit -m "Primera subida Delicias Express con CI" 

git branch -M main

$remoteUrl = "https://github.com/$usuario/$repositorio.git"
$originExiste = git remote get-url origin 2>$null

if ($LASTEXITCODE -eq 0) {
  git remote set-url origin $remoteUrl
} else {
  git remote add origin $remoteUrl
}

git remote -v
git push -u origin main
