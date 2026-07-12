# Aprendiendo Git y Colaborando en Comunidad →

¡Bienvenido/a a este repositorio! El objetivo principal es proporcionar un espacio para aprender los fundamentos de Git y dar los primeros pasos en el mundo de las contribuciones a proyectos de código abierto.

Este documento sirve como una guía de referencia rápida y un punto de partida. ¡No dudes en proponer cambios o añadir más recursos!

## ◈ Objetivos de aprendizaje

*   Entender qué es Git y por qué es tan importante en el desarrollo de software.
*   Aprender los comandos básicos de Git para el control de versiones.
*   Familiarizarse con el flujo de trabajo de GitHub (o plataformas similares).
*   Realizar tu primera contribución a un proyecto.
*   Comprender la importancia de las buenas prácticas al colaborar.

##  Glosario de Términos Clave

*   **Repositorio (Repository):** Carpeta que contiene tu proyecto y todo su historial de cambios (`.git`).
*   **Commit:** Una "instantánea" guardada de los cambios en tus archivos. Cada commit tiene un mensaje y un identificador único.
*   **Rama (Branch):** Una línea de desarrollo independiente. La rama principal suele llamarse `main` o `master`.
*   **Fusionar (Merge):** Proceso de combinar los cambios de una rama en otra.
*   **Fork:** Una copia de un repositorio que pertenece a tu cuenta personal. Te permite experimentar libremente sin afectar el proyecto original.
*   **Pull Request (PR):** Una solicitud para que los mantenedores de un proyecto incorporen los cambios de tu fork en su repositorio.
*   **HEAD:** Un puntero que apunta al último commit de la rama en la que te encuentras.
*   **Remoto (Remote):** Una versión de tu repositorio alojada en un servidor (como GitHub). `origin` es el nombre predeterminado del remoto desde el que clonaste.

## ⚙ Comandos Esenciales de Git

Aquí tienes una lista de los comandos más comunes que usarás en tu día a día.

### Configuración Inicial
*Configura tu nombre y correo electrónico (solo se hace una vez).*
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@example.com"
```

### Obtener un Repositorio
*Clona un repositorio existente o inicializa uno nuevo.*
```bash
# Clonar un repositorio remoto
git clone <URL_DEL_REPOSITORIO>

# Inicializar un repositorio en una carpeta existente
git init
```

### El Flujo de Trabajo Básico
*Revisa cambios, añádelos al área de preparación (staging) y guárdalos en un commit.*
```bash
# Ver el estado de tus archivos (cuáles están modificados, etc.)
git status

# Añadir un archivo específico al área de preparación
git add nombre_del_archivo.txt

# Añadir todos los archivos modificados al área de preparación
git add .

# Guardar los cambios preparados en un commit
git commit -m "Un mensaje descriptivo de tus cambios"
```

### Ramas y Fusiones
*Crea ramas para desarrollar nuevas funcionalidades de forma aislada y luego intégralas.*
```bash
# Ver todas las ramas locales
git branch

# Crear una nueva rama
git branch nombre-de-la-rama

# Cambiar a una rama
git checkout nombre-de-la-rama

# Crear una rama y cambiar a ella en un solo paso
git checkout -b nueva-rama

# Fusionar los cambios de otra rama en tu rama actual
git merge nombre-de-la-rama-a-fusionar
```

### Sincronización con Remotos
*Envía y recibe cambios desde un repositorio remoto como GitHub.*
```bash
# Descargar cambios del remoto, pero no los fusiona
git fetch

# Descargar y fusionar cambios del remoto (fetch + merge)
git pull

# Subir tus commits a un repositorio remoto
git push origin nombre-de-tu-rama
```

## ✦ Cómo contribuir

Este es un proyecto abierto a la comunidad. Si quieres contribuir, ¡genial! Puedes empezar por:

1.  Hacer un **fork** de este repositorio.
2.  Clonar tu fork en tu máquina local (`git clone URL_DE_TU_FORK`).
3.  Crear una nueva **rama** para tus cambios (`git checkout -b mi-nueva-funcionalidad`).
4.  Realizar tus cambios y hacer **commit** (`git commit -m 'Añade una nueva funcionalidad'`).
5.  Hacer **push** a tu rama en tu fork (`git push origin mi-nueva-funcionalidad`).
5.  Abrir un **Pull Request** para que revisemos tus cambios.

## ▸ Buenas Prácticas

*   **Escribe mensajes de commit claros:** Un buen mensaje explica qué hace el cambio y por qué.
*   **Crea commits pequeños y atómicos:** Cada commit debe representar una unidad lógica de trabajo.
*   **Usa ramas para nuevas funcionalidades:** No trabajes directamente sobre la rama `main`.
*   **Actualiza tu rama a menudo:** Sincroniza tu rama con la rama principal del proyecto (`main`) para evitar conflictos.

## ▸ Características del sitio

*   **Fondo animado estilo Matrix Rain:** Un canvas interactivo que muestra comandos de Git cayendo como lluvia de caracteres. El fondo responde al movimiento del mouse, iluminando las columnas cercanas al cursor.
*   **15 lecciones interactivas:** Desde fundamentos hasta comandos avanzados como rebase, cherry-pick y bisect.
*   **Terminales simulados:** Practica comandos de Git en un entorno seguro sin riesgo de romper nada.
*   **Quiz final con 15 preguntas:** Evalúa tus conocimientos al finalizar el tutorial.
*   **Progreso persistente:** Tu avance se guarda automáticamente en el navegador.
*   **Responsive:** Funciona en desktop y dispositivos móviles.

## 📖 Contenido del tutorial

### Fundamentos
1. ¿Qué es Git?
2. Configuración inicial
3. Obtener un repositorio

### Flujo de trabajo
4. El flujo básico
5. Mensajes de commit

### Ramas y Fusiones
6. Crear y usar ramas
7. Fusionar ramas

### Trabajo en Remoto
8. Sincronizar con remotos
9. Fork y Pull Request

### Avanzado
10. Git Stash
11. Git Rebase
12. Git Cherry-Pick
13. Git Reset vs Revert
14. Git Bisect

### Evaluación
15. Quiz Final

## ▷ Recursos Adicionales

*   Documentación oficial de Git: La fuente de toda la verdad.
*   Libro Pro Git: Un libro excelente y gratuito sobre Git.
*   Learn Git Branching: Un tutorial interactivo para aprender sobre ramas.
*   Oh Shit, Git!?!: Guía para solucionar errores comunes en Git (en inglés).