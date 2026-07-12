// ── Lesson Data ──
const lessons = [
  {
    id: 'welcome',
    group: '',
    title: 'Bienvenida',
    icon: '◈',
    content: () => `
      <div class="welcome">
        <div class="big-icon">→</div>
        <h2>Aprende Git desde cero</h2>
        <p>Un tutorial interactivo para dominar los fundamentos de Git, el sistema de control de versiones más usado del mundo.</p>
        <div class="welcome-features">
          <div class="welcome-feature">
            <div class="feat-icon">▸</div>
            <h4>Lecciones</h4>
            <p>Contenido claro y conciso</p>
          </div>
          <div class="welcome-feature">
            <div class="feat-icon">◈</div>
            <h4>Terminal</h4>
            <p>Practica comandos reales</p>
          </div>
          <div class="welcome-feature">
            <div class="feat-icon">◉</div>
            <h4>Ejercicios</h4>
            <p>Pon a prueba tus conocimientos</p>
          </div>
        </div>
        <button class="btn btn-primary" onclick="goToLesson(1)" style="padding:10px 28px;font-size:0.95rem;">
          Comenzar →
        </button>
      </div>
    `
  },
  {
    id: 'what-is-git',
    group: 'Fundamentos',
    title: '¿Qué es Git?',
    icon: '◆',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 1 · Fundamentos</span>
        <h2>◆ ¿Qué es Git?</h2>
        <p>Git es un <strong>sistema de control de versiones distribuido</strong>. Esto significa que mantiene un registro de los cambios realizados en archivos a lo largo del tiempo, permitiéndote volver a versiones anteriores y colaborar con otros.</p>

        <div class="info-box tip">
          <strong>◆ ¿Por qué es importante?</strong><br>
          Casi todos los proyectos de software profesional usan Git. Es la herramienta base para trabajar en equipo y contribuir a proyectos de código abierto.
        </div>

        <h3>Conceptos clave</h3>
        <ul>
          <li><strong>Repositorio (Repository):</strong> Una carpeta que contiene tu proyecto y todo su historial de cambios. Se identifica por la carpeta oculta <code>.git</code>.</li>
          <li><strong>Commit:</strong> Una "instantánea" de tus archivos en un momento dado. Cada commit tiene un ID único y un mensaje descriptivo.</li>
          <li><strong>Rama (Branch):</strong> Una línea de desarrollo independiente. Puedes tener múltiples ramas para trabajar en distintas features sin afectar otras.</li>
          <li><strong>HEAD:</strong> Un puntero que indica en qué commit estás parado actualmente.</li>
        </ul>

        <div class="info-box">
          <strong>↻ Git es distribuido:</strong> A diferencia de sistemas centralizados, cada desarrollador tiene una copia completa del historial en su máquina. Esto lo hace rápido y resistente a fallos.
        </div>
      </div>
    `
  },
  {
    id: 'setup',
    group: 'Fundamentos',
    title: 'Configuración inicial',
    icon: '◇',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 2 · Fundamentos</span>
        <h2>◇ Configuración Inicial</h2>
        <p>Antes de empezar a usar Git, necesitas configurar tu nombre y correo electrónico. Esta información se associa a cada commit que realices.</p>

        <div class="code-block">
          <div class="code-header">
            <span>Terminal</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cmd">git</span> <span class="flag">config</span> <span class="flag">--global</span> user.name <span class="string">"Tu Nombre"</span>
<span class="cmd">git</span> <span class="flag">config</span> <span class="flag">--global</span> user.email <span class="string">"tu.email@ejemplo.com"</span></pre>
        </div>

        <div class="info-box warning">
          <strong>⚠ Nota:</strong> El flag <code>--global</code> aplica la configuración a todos los repositorios de tu máquina. Si quieres configurar solo uno, quita el flag.
        </div>

        <h3>Prueba en la terminal</h3>
        <p>Escribe el comando de configuración para practicar:</p>
        <div class="terminal" id="terminal-setup">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git config</span>
          </div>
          <div class="terminal-body" id="terminal-body-setup"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~$</span>
              <input class="terminal-input" id="terminal-input-setup" placeholder="Escribe un comando..." autofocus
                onkeydown="if(event.key==='Enter')handleTerminalCommand('setup')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'git-init-clone',
    group: 'Fundamentos',
    title: 'Obtener un repositorio',
    icon: '□',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 3 · Fundamentos</span>
        <h2>□ Obtener un Repositorio</h2>
        <p>Hay dos formas principales de empezar a trabajar con Git:</p>

        <h3>1. Clonar un repositorio existente</h3>
        <p>Crea una copia local de un repositorio remoto (por ejemplo, de GitHub).</p>
        <div class="code-block">
          <div class="code-header"><span>Terminal</span><button class="copy-btn" onclick="copyCode(this)">Copiar</button></div>
          <pre><span class="cmd">git</span> <span class="flag">clone</span> <span class="string">https://github.com/usuario/proyecto.git</span></pre>
        </div>

        <h3>2. Inicializar un repositorio nuevo</h3>
        <p>Convierte una carpeta existente en un repositorio Git.</p>
        <div class="code-block">
          <div class="code-header"><span>Terminal</span><button class="copy-btn" onclick="copyCode(this)">Copiar</button></div>
          <pre><span class="cmd">git</span> <span class="flag">init</span></pre>
        </div>

        <h3>Diagrama: Flujo de archivos</h3>
        <div class="git-diagram" id="diagram-init">
          <div class="git-zone active">
            <h4>Directorio de trabajo</h4>
            <div class="file-icon">📄</div>
            <div class="file-name">mi-archivo.txt</div>
          </div>
          <div class="git-arrow">→</div>
          <div class="git-zone">
            <h4>Área de preparación</h4>
            <div class="file-icon" style="opacity:0.3">📋</div>
            <div class="file-name" style="color:var(--text-muted)">vacío</div>
          </div>
          <div class="git-arrow">→</div>
          <div class="git-zone">
            <h4>Repositorio (.git)</h4>
            <div class="file-icon" style="opacity:0.3">🗄️</div>
            <div class="file-name" style="color:var(--text-muted)">sin commits</div>
          </div>
        </div>

        <div class="info-box tip">
          <strong>◆ Consejo:</strong> Usa <code>git clone</code> cuando quieras contribuir a un proyecto existente. Usa <code>git init</code> cuando crees algo nuevo desde cero.
        </div>
      </div>
    `
  },
  {
    id: 'workflow',
    group: 'Flujo de trabajo',
    title: 'El flujo básico',
    icon: '↻',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 4 · Flujo de trabajo</span>
        <h2>↻ El Flujo de Trabajo Básico</h2>
        <p>El flujo de Git tiene 3 zonas principales. Entenderlas es la clave para usar Git correctamente.</p>

        <h3>Las 3 zonas</h3>
        <ul>
          <li><strong>Directorio de trabajo (Working Directory):</strong> Donde editas tus archivos normalmente.</li>
          <li><strong>Área de preparación (Staging Area):</strong> Donde preparas los cambios que quieres incluir en el próximo commit.</li>
          <li><strong>Repositorio (Repository):</strong> Donde Git guarda el historial completo de commits.</li>
        </ul>

        <h3>Los 3 pasos fundamentales</h3>
        <div class="git-diagram">
          <div class="git-zone active">
            <h4>1. Editar archivos</h4>
            <div class="file-icon">✏️</div>
            <div class="file-name">modificar</div>
          </div>
          <div class="git-arrow">→</div>
          <div class="git-zone staging active">
            <h4>2. git add</h4>
            <div class="file-icon">📦</div>
            <div class="file-name">preparar</div>
          </div>
          <div class="git-arrow">→</div>
          <div class="git-zone repo active">
            <h4>3. git commit</h4>
            <div class="file-icon">💾</div>
            <div class="file-name">guardar</div>
          </div>
        </div>

        <div class="code-block">
          <div class="code-header"><span>Los comandos</span></div>
          <pre><span class="comment"># Ver el estado de tus archivos</span>
<span class="cmd">git</span> <span class="flag">status</span>

<span class="comment"># Añadir un archivo al área de preparación</span>
<span class="cmd">git</span> <span class="flag">add</span> <span class="string">nombre_del_archivo.txt</span>

<span class="comment"># Añadir TODOS los archivos al área de preparación</span>
<span class="cmd">git</span> <span class="flag">add</span> .

<span class="comment"># Guardar los cambios en un commit</span>
<span class="cmd">git</span> <span class="flag">commit</span> <span class="flag">-m</span> <span class="string">"Mensaje descriptivo"</span></pre>
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-workflow">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — flujo de trabajo</span>
          </div>
          <div class="terminal-body" id="terminal-body-workflow"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (main) $</span>
              <input class="terminal-input" id="terminal-input-workflow" placeholder="Prueba: git status, git add, git commit..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('workflow')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'commit-msg',
    group: 'Flujo de trabajo',
    title: 'Mensajes de commit',
    icon: '▸',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 5 · Flujo de trabajo</span>
        <h2>▸ Mensajes de Commit</h2>
        <p>Un buen mensaje de commit es como un buen título: debe explicar <strong>qué</strong> hizo el cambio y <strong>por qué</strong>.</p>

        <h3>Buenos vs Malos mensajes</h3>
        <div class="code-block">
          <div class="code-header"><span>✗ Malos ejemplos</span></div>
          <pre><span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"fix"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"cambios"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"asdfgh"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"update"</span></pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span>✓ Buenos ejemplos</span></div>
          <pre><span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"Añade validación de email en formulario de registro"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"Corrige error al calcular precio con descuento"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"Refactoriza lógica de autenticación en módulo auth"</span>
<span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"Añade tests para la función de parseo de fechas"</span></pre>
        </div>

        <h3>Convención de mensajes</h3>
        <p>Una práctica popular es usar prefijos para clasificar el tipo de cambio:</p>
        <ul>
          <li><code>feat:</code> Nueva funcionalidad</li>
          <li><code>fix:</code> Corrección de un bug</li>
          <li><code>docs:</code> Cambios en la documentación</li>
          <li><code>test:</code> Añadir o modificar tests</li>
          <li><code>refactor:</code> Reestructurar código sin cambiar comportamiento</li>
        </ul>

        <div class="code-block">
          <div class="code-header"><span>Ejemplo con convención</span></div>
          <pre><span class="cmd">git</span> commit <span class="flag">-m</span> <span class="string">"feat: añade panel de configuración de usuario"</span></pre>
        </div>

        <div class="info-box tip">
          <strong>◆ Regla de oro:</strong> Si tu mensaje de commit no explica el cambio por sí solo, probablemente tu commit es demasiado grande. Divídelo en commits más pequeños y atómicos.
        </div>
      </div>
    `
  },
  {
    id: 'branches',
    group: 'Ramas y Fusiones',
    title: 'Crear y usar ramas',
    icon: '❖',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 6 · Ramas y Fusiones</span>
        <h2>❖ Crear y Usar Ramas</h2>
        <p>Las ramas te permiten desarrollar funcionalidades de forma <strong>aislada</strong> sin afectar la rama principal.</p>

        <h3>Comandos de ramas</h3>
        <div class="code-block">
          <div class="code-header"><span>Comandos esenciales</span></div>
          <pre><span class="comment"># Ver todas las ramas</span>
<span class="cmd">git</span> <span class="flag">branch</span>

<span class="comment"># Crear una nueva rama</span>
<span class="cmd">git</span> <span class="flag">branch</span> <span class="string">nueva-funcionalidad</span>

<span class="comment"># Cambiar a otra rama</span>
<span class="cmd">git</span> <span class="flag">checkout</span> <span class="string">nueva-funcionalidad</span>

<span class="comment"># Crear y cambiar en un solo paso</span>
<span class="cmd">git</span> <span class="flag">checkout</span> <span class="flag">-b</span> <span class="string">mi-feature</span>

<span class="comment"># (Alternativa moderna)</span>
<span class="cmd">git</span> <span class="flag">switch</span> <span class="string">nueva-funcionalidad</span>
<span class="cmd">git</span> <span class="flag">switch</span> <span class="flag">-c</span> <span class="string">mi-feature</span></pre>
        </div>

        <h3>Visualizando ramas</h3>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.82rem;background:var(--terminal-bg);border:1px solid var(--border);border-radius:10px;padding:20px;margin:16px 0;line-height:2;">
          <span style="color:var(--text-muted)">* </span><span style="color:var(--green)">main</span> <span style="color:var(--text-muted)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← estás aquí</span><br>
          <span style="color:var(--text-muted)">&nbsp; </span><span style="color:var(--orange)">feature-login</span><br>
          <span style="color:var(--text-muted)">&nbsp; </span><span style="color:var(--purple)">fix-bug-carrito</span><br>
          <span style="color:var(--text-muted)">&nbsp; </span><span style="color:var(--accent)">develop</span>
        </div>

        <div class="info-box tip">
          <strong>◆ Convención:</strong> Nombra tus ramas con un formato consistente como <code>feature/nombre</code>, <code>fix/nombre</code> o <code>hotfix/nombre</code>.
        </div>
      </div>
    `
  },
  {
    id: 'merge',
    group: 'Ramas y Fusiones',
    title: 'Fusionar ramas',
    icon: '⇄',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 7 · Ramas y Fusiones</span>
        <h2>⇄ Fusionar Ramas (Merge)</h2>
        <p>Cuando terminas de trabajar en una rama, fusionas (<code>merge</code>) los cambios en otra rama (normalmente <code>main</code>).</p>

        <h3>Paso a paso</h3>
        <div class="code-block">
          <div class="code-header"><span>Proceso de merge</span></div>
          <pre><span class="comment"># 1. Cambia a la rama destino</span>
<span class="cmd">git</span> <span class="flag">checkout</span> <span class="string">main</span>

<span class="comment"># 2. Fusiona la rama con los cambios</span>
<span class="cmd">git</span> <span class="flag">merge</span> <span class="string">feature-login</span>

<span class="comment"># 3. (Opcional) Elimina la rama ya fusionada</span>
<span class="cmd">git</span> <span class="flag">branch</span> <span class="flag">-d</span> <span class="string">feature-login</span></pre>
        </div>

        <h3>¿Qué pasa cuando hay conflictos?</h3>
        <p>A veces, Git no puede fusionar automáticamente porque dos ramas modificaron las mismas líneas. Esto se llama un <strong>conflicto de merge</strong>.</p>

        <div class="code-block">
          <div class="code-header"><span>Aspecto de un conflicto</span></div>
          <pre><span style="color:var(--red)"><<<<<<< HEAD (main)</span>
<span style="color:var(--text)">Mensaje de la rama principal</span>
<span style="color:var(--red)">=======</span>
<span style="color:var(--text)">Mensaje de la otra rama</span>
<span style="color:var(--red)">>>>>>>> feature-login</span></pre>
        </div>

        <div class="info-box warning">
          <strong>⚠ Para resolver conflictos:</strong><br>
          1. Abre el archivo con el conflicto<br>
          2. Elige qué versión conservar (o combínalas)<br>
          3. Elimina los marcadores de conflicto<br>
          4. Haz <code>git add</code> y <code>git commit</code>
        </div>

        <h3>Diagrama de merge</h3>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.78rem;background:var(--terminal-bg);border:1px solid var(--border);border-radius:10px;padding:20px;margin:16px 0;line-height:1.8;overflow-x:auto;white-space:pre;">
<span style="color:var(--green)">main:    </span>  A ── B ── C ── D ──── <span style="color:var(--green)">F</span> ← merge
                  \\         ↗
<span style="color:var(--orange)">feature: </span>        └─ E ──┘</div>
      </div>
    `
  },
  {
    id: 'remotes',
    group: 'Trabajo en Remoto',
    title: 'Sincronizar con remotos',
    icon: '☁',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 8 · Trabajo en Remoto</span>
        <h2>☁ Sincronizar con Remotos</h2>
        <p>Los repositorios remotos (como GitHub) permiten <strong>colaborar</strong> con otros. Git tiene comandos para enviar y recibir cambios.</p>

        <h3>Los 3 comandos clave</h3>
        <div class="code-block">
          <div class="code-header"><span>fetch, pull y push</span></div>
          <pre><span class="comment"># Descargar cambios del remoto SIN fusionarlos</span>
<span class="cmd">git</span> <span class="flag">fetch</span> <span class="string">origin</span>

<span class="comment"># Descargar Y fusionar cambios (fetch + merge)</span>
<span class="cmd">git</span> <span class="flag">pull</span> <span class="string">origin</span> <span class="string">main</span>

<span class="comment"># Subir tus commits al remoto</span>
<span class="cmd">git</span> <span class="flag">push</span> <span class="string">origin</span> <span class="string">mi-rama</span></pre>
        </div>

        <h3>Diferencia entre fetch y pull</h3>
        <div class="info-box">
          <strong>fetch</strong> = "¿Qué hay de nuevo en el servidor?" (solo descarga info, no cambia tu código)<br><br>
          <strong>pull</strong> = "Descarga y aplica los cambios" (fetch + merge automático)
        </div>

        <h3>¿Qué es un remoto?</h3>
        <p>Un remoto es una versión de tu repositorio alojada en un servidor. El nombre por defecto del remoto es <code>origin</code>.</p>

        <div class="code-block">
          <div class="code-header"><span>Ver remotos</span></div>
          <pre><span class="comment"># Ver los remotos configurados</span>
<span class="cmd">git</span> <span class="flag">remote</span> <span class="flag">-v</span>

<span class="comment"># Añadir un remoto</span>
<span class="cmd">git</span> <span class="flag">remote</span> <span class="flag">add</span> <span class="string">origin</span> <span class="string">https://github.com/usuario/repo.git</span></pre>
        </div>
      </div>
    `
  },
  {
    id: 'fork-pr',
    group: 'Trabajo en Remoto',
    title: 'Fork y Pull Request',
    icon: '✦',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 9 · Trabajo en Remoto</span>
        <h2>✦ Fork y Pull Request</h2>
        <p>Así contribuyes a proyectos de código abierto sin tener permisos de escritura directa.</p>

        <h3>¿Qué es un Fork?</h3>
        <p>Un <strong>fork</strong> es una copia de un repositorio que pertenece a tu cuenta personal. Te permite experimentar sin afectar el original.</p>

        <h3>¿Qué es un Pull Request?</h3>
        <p>Un <strong>Pull Request (PR)</strong> es una solicitud para que los mantenedores del proyecto revisen e incorporen tus cambios.</p>

        <h3>El flujo completo de contribución</h3>
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.78rem;background:var(--terminal-bg);border:1px solid var(--border);border-radius:10px;padding:20px;margin:16px 0;line-height:2;">
<span style="color:var(--text-muted)">1.</span> <span style="color:var(--accent)">Hacer Fork</span> del repositorio original en GitHub
<span style="color:var(--text-muted)">2.</span> <span style="color:var(--green)">Clonar</span> tu fork:     <span style="color:var(--orange)">git clone URL_DE_TU_FORK</span>
<span style="color:var(--text-muted)">3.</span> <span style="color:var(--purple)">Crear rama</span>:          <span style="color:var(--orange)">git checkout -b mi-contribucion</span>
<span style="color:var(--text-muted)">4.</span> <span style="color:var(--accent)">Hacer cambios</span> y commits
<span style="color:var(--text-muted)">5.</span> <span style="color:var(--green)">Push a tu fork</span>:     <span style="color:var(--orange)">git push origin mi-contribucion</span>
<span style="color:var(--text-muted)">6.</span> <span style="color:var(--accent)">Abrir Pull Request</span> en GitHub
<span style="color:var(--text-muted)">7.</span> <span style="color:var(--green)">Code review</span> y merge de los mantenedores</div>

        <div class="info-box tip">
          <strong>◆ Primera contribución:</strong> Muchos proyectos etiquetan issues como "good first issue" o "help wanted". Son perfectas para empezar a contribuir.
        </div>
      </div>
    `
  },
  {
    id: 'git-stash',
    group: 'Avanzado',
    title: 'Guardar cambios temporalmente',
    icon: '◆',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 10 · Avanzado</span>
        <h2>◆ Git Stash</h2>
        <p>A veces necesitas guardar cambios temporalmente sin hacer un commit. <code>git stash</code> hace exactamente eso: toma tus cambios pendientes y los guarda en una pila, dejando tu directorio de trabajo limpio.</p>

        <h3>¿Cuándo usar stash?</h3>
        <ul>
          <li>Necesitas cambiar de rama urgentemente pero tus cambios no están listos para commit.</li>
          <li>Quieres probar algo sin perder tu trabajo actual.</li>
          <li>Recibiste un pull y necesitas guardar tus cambios primero.</li>
        </ul>

        <h3>Comandos esenciales</h3>
        <div class="code-block">
          <div class="code-header"><span>Comandos de stash</span></div>
          <pre><span class="comment"># Guardar cambios en la pila</span>
<span class="cmd">git</span> <span class="flag">stash</span>

<span class="comment"># Guardar con un mensaje descriptivo</span>
<span class="cmd">git</span> <span class="flag">stash</span> push -m <span class="string">"WIP: refactor del módulo auth"</span>

<span class="comment"># Ver la lista de stashes</span>
<span class="cmd">git</span> <span class="flag">stash</span> list

<span class="comment"># Recuperar el último stash (y eliminarlo de la pila)</span>
<span class="cmd">git</span> <span class="flag">stash</span> pop

<span class="comment"># Recuperar sin eliminar (conservar en la pila)</span>
<span class="cmd">git</span> <span class="flag">stash</span> apply

<span class="comment"># Eliminar un stash específico</span>
<span class="cmd">git</span> <span class="flag">stash</span> drop stash@{0}

<span class="comment"># Limpiar todos los stashes</span>
<span class="cmd">git</span> <span class="flag">stash</span> clear</pre>
        </div>

        <div class="info-box tip">
          <strong>◆ Consejo:</strong> Usa <code>git stash push -m "mensaje"</code> en lugar de <code>git stash</code> simple. Cuando tengas varios stashes, los mensajes te ayudarán a identificar cuál es cuál.
        </div>

        <div class="info-box warning">
          <strong>⚠ Precaución:</strong> <code>git stash</code> solo guarda archivos rastreados (tracked). Para incluir archivos nuevos sin rastrear, usa <code>git stash -u</code>.
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-stash">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git stash</span>
          </div>
          <div class="terminal-body" id="terminal-body-stash"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (main) $</span>
              <input class="terminal-input" id="terminal-input-stash" placeholder="Prueba: git stash, git stash list, git stash pop..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('stash')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'git-rebase',
    group: 'Avanzado',
    title: 'Rebasar ramas',
    icon: '↻',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 11 · Avanzado</span>
        <h2>↻ Git Rebase</h2>
        <p><code>git rebase</code> es una alternativa a <code>git merge</code> para integrar cambios entre ramas. En lugar de crear un commit de merge, rebase "trasplanta" tus commits al final de la rama destino, creando un historial lineal.</p>

        <h3>Merge vs Rebase</h3>
        <div class="code-block">
          <div class="code-header"><span>Con merge</span></div>
          <pre><span style="color:var(--green)">main:    </span>  A ── B ── C ── D ──── <span style="color:var(--green)">F</span> ← merge
                  \\         ↗
<span style="color:var(--orange)">feature: </span>        └─ E ──┘</pre>
        </div>

        <div class="code-block">
          <div class="code-header"><span>Con rebase</span></div>
          <pre><span style="color:var(--green)">main:    </span>  A ── B ── C ── D
                             \\
<span style="color:var(--orange)">feature: </span>              E' ── F' ← commits trasplantados</pre>
        </div>

        <h3>Comandos de rebase</h3>
        <div class="code-block">
          <div class="code-header"><span>Rebase interactivo</span></div>
          <pre><span class="comment"># Cambiar a la rama con tus cambios</span>
<span class="cmd">git</span> <span class="flag">checkout</span> <span class="string">mi-feature</span>

<span class="comment"># Rebasar sobre main</span>
<span class="cmd">git</span> <span class="flag">rebase</span> <span class="string">main</span>

<span class="comment"># Rebase interactivo (editar, reordenar, squash commits)</span>
<span class="cmd">git</span> <span class="flag">rebase</span> <span class="flag">-i</span> <span class="string">main</span>

<span class="comment"># Si hay conflictos, abortar el rebase</span>
<span class="cmd">git</span> <span class="flag">rebase</span> <span class="flag">--abort</span>

<span class="comment"># Continuar después de resolver conflictos</span>
<span class="cmd">git</span> <span class="flag">rebase</span> <span class="flag">--continue</span></pre>
        </div>

        <div class="info-box warning">
          <strong>⚠ Regla de oro:</strong> Nunca hagas rebase en ramas que ya fueron compartidas/pusheadas. Rebase reescribe el historial, lo que puede causar problemas a otros colaboradores.
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-rebase">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git rebase</span>
          </div>
          <div class="terminal-body" id="terminal-body-rebase"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (mi-feature) $</span>
              <input class="terminal-input" id="terminal-input-rebase" placeholder="Prueba: git rebase main, git rebase --abort..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('rebase')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'git-cherry-pick',
    group: 'Avanzado',
    title: 'Copiar commits específicos',
    icon: '◆',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 12 · Avanzado</span>
        <h2>◆ Git Cherry-Pick</h2>
        <p><code>git cherry-pick</code> te permite copiar un commit específico de una rama a otra, sin fusionar toda la rama. Es útil cuando necesitas un fix rápido en otra rama.</p>

        <h3>¿Cuándo usar cherry-pick?</h3>
        <ul>
          <li>Un bug fix en <code>develop</code> que necesitas aplicar urgentemente en <code>main</code>.</li>
          <li>Recuperar un commit que se perdió en un rebase.</li>
          <li>Aplicar un cambio selectivo sin traer todo el historial de una rama.</li>
        </ul>

        <h3>Comandos</h3>
        <div class="code-block">
          <div class="code-header"><span>Cherry-pick</span></div>
          <pre><span class="comment"># Copiar un commit por su hash</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="string">a1b2c3d</span>

<span class="comment"># Copiar múltiples commits</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="string">a1b2c3d e4f5g6h</span>

<span class="comment"># Copiar un rango de commits (excluyendo el primero)</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="string">a1b2c3d..e4f5g6h</span>

<span class="comment"># Copiar sin crear el commit (solo aplicar cambios)</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="flag">-n</span> <span class="string">a1b2c3d</span>

<span class="comment"># Abortar si hay conflictos</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="flag">--abort</span></pre>
        </div>

        <div class="info-box tip">
          <strong>◆ Consejo:</strong> Usa <code>git log --oneline</code> para encontrar el hash del commit que quieres copiar.
        </div>

        <h3>Ejemplo práctico</h3>
        <div class="code-block">
          <div class="code-header"><span>Escenario</span></div>
          <pre><span class="comment"># Estás en main y necesitas un fix de la rama develop</span>
<span class="cmd">git</span> <span class="flag">checkout</span> <span class="string">main</span>
<span class="cmd">git</span> <span class="flag">cherry-pick</span> <span class="string">f7a8b9c</span>

<span class="comment"># ¡Listo! El fix está aplicado en main</span></pre>
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-cherrypick">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git cherry-pick</span>
          </div>
          <div class="terminal-body" id="terminal-body-cherrypick"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (main) $</span>
              <input class="terminal-input" id="terminal-input-cherrypick" placeholder="Prueba: git cherry-pick a1b2c3d..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('cherrypick')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'git-reset-revert',
    group: 'Avanzado',
    title: 'Reset vs Revert',
    icon: '◁',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 13 · Avanzado</span>
        <h2>◁ Git Reset vs Git Revert</h2>
        <p>Ambos deshacen cambios, pero de formas muy diferentes. <strong>Reset</strong> mueve el puntero HEAD (puede borrar historial). <strong>Revert</strong> crea un nuevo commit que deshace los cambios (preserva el historial).</p>

        <h3>Git Reset (3 modos)</h3>
        <div class="code-block">
          <div class="code-header"><span>Los 3 modos de reset</span></div>
          <pre><span class="comment"># --soft: mueve HEAD, conserva cambios en staging</span>
<span class="cmd">git</span> <span class="flag">reset</span> <span class="flag">--soft</span> <span class="string">HEAD~1</span>

<span class="comment"># --mixed (default): mueve HEAD, deshace staging, conserva en working dir</span>
<span class="cmd">git</span> <span class="flag">reset</span> <span class="flag">--mixed</span> <span class="string">HEAD~1</span>

<span class="comment"># --hard: mueve HEAD, BORRA todos los cambios (¡cuidado!)</span>
<span class="cmd">git</span> <span class="flag">reset</span> <span class="flag">--hard</span> <span class="string">HEAD~1</span></pre>
        </div>

        <h3>Git Revert</h3>
        <div class="code-block">
          <div class="code-header"><span>Revert seguro</span></div>
          <pre><span class="comment"># Crea un nuevo commit que deshace los cambios del commit indicado</span>
<span class="cmd">git</span> <span class="flag">revert</span> <span class="string">a1b2c3d</span>

<span class="comment"># Revert sin abrir editor de commit</span>
<span class="cmd">git</span> <span class="flag">revert</span> <span class="flag">--no-edit</span> <span class="string">a1b2c3d</span></pre>
        </div>

        <div class="info-box">
          <strong>Resumen rápido:</strong><br>
          • <strong>Reset</strong> = "borrar el pasado" (reescribe historial)<br>
          • <strong>Revert</strong> = "agregar un paso adelante" (preserva historial)
        </div>

        <div class="info-box warning">
          <strong>⚠ ¿Cuándo usar cuál?</strong><br>
          • ¿El commit no se pusheó? → <code>git reset</code><br>
          • ¿El commit ya se pusheó / fue compartido? → <code>git revert</code>
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-reset">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git reset / revert</span>
          </div>
          <div class="terminal-body" id="terminal-body-reset"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (main) $</span>
              <input class="terminal-input" id="terminal-input-reset" placeholder="Prueba: git reset --soft HEAD~1, git revert a1b2c3d..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('reset')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'git-bisect',
    group: 'Avanzado',
    title: 'Encontrar bugs con bisect',
    icon: '◎',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 14 · Avanzado</span>
        <h2>◎ Git Bisect</h2>
        <p><code>git bisect</code> usa búsqueda binaria para encontrar automáticamente qué commit introdujo un bug. En lugar de revisar commits uno por uno, Git lo hace por ti, reduciendo el tiempo drásticamente.</p>

        <h3>¿Cómo funciona?</h3>
        <p>Si tienes 1000 commits y uno tiene un bug, bisect lo encuentra en ~10 pasos (log₂1000 ≈ 10).</p>

        <h3>Paso a paso</h3>
        <div class="code-block">
          <div class="code-header"><span>Búsqueda manual</span></div>
          <pre><span class="comment"># Iniciar bisect</span>
<span class="cmd">git</span> <span class="flag">bisect</span> start

<span class="comment"># Marcar el commit actual como MALO (tiene el bug)</span>
<span class="cmd">git</span> <span class="flag">bisect</span> bad

<span class="comment"># Marcar un commit conocido como BUENO (no tenía el bug)</span>
<span class="cmd">git</span> <span class="flag">bisect</span> good <span class="string">v1.0</span>

<span class="comment"># Git checkouta un commit intermedio. Prueba y marca:</span>
<span class="cmd">git</span> <span class="flag">bisect</span> good  <span class="comment"># si funciona</span>
<span class="cmd">git</span> <span class="flag">bisect</span> bad   <span class="comment"># si tiene el bug</span>

<span class="comment"># Repetir hasta que Git encuentre el commit culpable</span>

<span class="comment"># Volver a la rama original</span>
<span class="cmd">git</span> <span class="flag">bisect</span> reset</pre>
        </div>

        <h3>Búsqueda automatizada</h3>
        <div class="code-block">
          <div class="code-header"><span>Bisect con script</span></div>
          <pre><span class="comment"># Si tienes un test que falla:</span>
<span class="cmd">git</span> <span class="flag">bisect</span> start <span class="string">HEAD</span> <span class="string">v1.0</span>
<span class="cmd">git</span> <span class="flag">bisect</span> run <span class="string">npm test</span>

<span class="comment"># Git ejecutará el script automáticamente en cada commit</span>
<span class="comment"># y marcará good/bad según el código de salida</span></pre>
        </div>

        <div class="info-box tip">
          <strong>◆ Consejo:</strong> Crea un script de test que devuelva 0 si pasa y non-zero si falla. <code>git bisect run</code> lo ejecutará automáticamente.
        </div>

        <h3>Practica en la terminal</h3>
        <div class="terminal" id="terminal-bisect">
          <div class="terminal-header">
            <div class="terminal-dot red"></div>
            <div class="terminal-dot yellow"></div>
            <div class="terminal-dot green"></div>
            <span class="terminal-title">terminal — git bisect</span>
          </div>
          <div class="terminal-body" id="terminal-body-bisect"></div>
          <div style="padding:8px 16px 12px;">
            <div class="terminal-input-line">
              <span class="prompt">~/proyecto (main) $</span>
              <input class="terminal-input" id="terminal-input-bisect" placeholder="Prueba: git bisect start, git bisect bad, git bisect good..."
                onkeydown="if(event.key==='Enter')handleTerminalCommand('bisect')">
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'quiz',
    group: 'Evaluación',
    title: 'Quiz final',
    icon: '◉',
    content: () => `
      <div class="lesson-content">
        <span class="lesson-badge">Lección 15 · Evaluación</span>
        <h2>◉ Quiz Final</h2>
        <p>Pon a prueba todo lo que has aprendido. ¡Buena suerte!</p>
        <div id="quizContainer"></div>
      </div>
    `,
    quiz: true
  },
  {
    id: 'complete',
    group: '',
    title: '¡Completado!',
    icon: '★',
    content: () => `
      <div class="completion-banner">
        <div class="big-icon">★</div>
        <h2>¡Felicitaciones!</h2>
        <p>Has completado el tutorial de Git. Ya tienes los fundamentos para empezar a usar Git en tus proyectos y contribuir a código abierto.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="goToLesson(0)">↻ Repasar desde el inicio</button>
          <a class="btn" href="https://git-scm.com/doc" target="_blank">📚 Docs oficiales de Git</a>
        </div>
      </div>
    `
  }
];

// ── Quiz Data ──
const quizData = [
  {
    q: '¿Qué comando inicializa un nuevo repositorio Git en una carpeta?',
    options: ['git start', 'git init', 'git new', 'git create'],
    correct: 1,
    explanation: '`git init` convierte la carpeta actual en un repositorio Git.'
  },
  {
    q: '¿Cuál es la diferencia entre `git fetch` y `git pull`?',
    options: [
      'No hay diferencia',
      'fetch descarga y pull sube',
      'fetch solo descarga, pull descarga y fusiona',
      'pull es más rápido que fetch'
    ],
    correct: 2,
    explanation: '`git fetch` descarga cambios del remoto sin fusionarlos. `git pull` hace fetch + merge automático.'
  },
  {
    q: '¿Qué comando añade archivos al área de preparación (staging)?',
    options: ['git commit', 'git push', 'git add', 'git stage'],
    correct: 2,
    explanation: '`git add` mueve los archivos del directorio de trabajo al área de preparación.'
  },
  {
    q: '¿Qué es un fork?',
    options: [
      'Un tipo de commit',
      'Una copia de un repositorio en tu cuenta',
      'Un comando para borrar ramas',
      'Una rama especial'
    ],
    correct: 1,
    explanation: 'Un fork es una copia de un repositorio que vive en tu cuenta, permitiéndote modificarlo sin afectar el original.'
  },
  {
    q: '¿Cómo creas una rama y cambias a ella en un solo paso?',
    options: [
      'git branch -b nueva-rama',
      'git switch nueva-rama',
      'git checkout -b nueva-rama',
      'git new-branch nueva-rama'
    ],
    correct: 2,
    explanation: '`git checkout -b nueva-rama` crea una rama nueva y te mueve a ella instantáneamente.'
  },
  {
    q: '¿Qué debes hacer después de resolver un conflicto de merge?',
    options: [
      'git reset',
      'git add y git commit',
      'git merge --abort',
      'git push'
    ],
    correct: 1,
    explanation: 'Después de resolver el conflicto manualmente, haces `git add` para marcarlo como resuelto y luego `git commit` para finalizar.'
  },
  {
    q: '¿Qué comando guarda cambios temporalmente sin hacer commit?',
    options: ['git save', 'git stash', 'git cache', 'git park'],
    correct: 1,
    explanation: '`git stash` guarda tus cambios pendientes en una pila y deja tu directorio de trabajo limpio.'
  },
  {
    q: '¿Cómo recuperas el último stash y lo eliminas de la pila?',
    options: ['git stash apply', 'git stash pop', 'git stash recover', 'git stash get'],
    correct: 1,
    explanation: '`git stash pop` recupera el último stash y lo elimina de la pila. `git stash apply` lo recupera sin eliminarlo.'
  },
  {
    q: '¿Cuál es la diferencia principal entre `git merge` y `git rebase`?',
    options: [
      'No hay diferencia',
      'merge crea un commit de merge, rebase trasplanta los commits',
      'rebase es más lento que merge',
      'merge solo funciona con ramas locales'
    ],
    correct: 1,
    explanation: '`git merge` crea un commit de merge que une las ramas. `git rebase` trasplanta los commits al final de la rama destino, creando un historial lineal.'
  },
  {
    q: '¿Cuándo NUNCA debes hacer `git rebase`?',
    options: [
      'Cuando estás en la rama main',
      'Cuando la rama ya fue compartida/pusheada',
      'Cuando hay conflictos',
      'Cuando tienes stashes pendientes'
    ],
    correct: 1,
    explanation: 'Rebase reescribe el historial. Si la rama ya fue compartida, otros podrían tener problemas con el historial reescrito.'
  },
  {
    q: '¿Qué hace `git cherry-pick`?',
    options: [
      'Borra un commit específico',
      'Copia un commit de una rama a otra',
      'Crea un nuevo branch desde un commit',
      'Invierte los cambios de un commit'
    ],
    correct: 1,
    explanation: '`git cherry-pick` copia un commit específico de una rama a otra, sin necesidad de fusionar toda la rama.'
  },
  {
    q: '¿Cuál es la diferencia entre `git reset` y `git revert`?',
    options: [
      'No hay diferencia',
      'reset borra el commit, revert crea un nuevo commit que deshace los cambios',
      'reset es más seguro que revert',
      'revert solo funciona en ramas locales'
    ],
    correct: 1,
    explanation: '`git reset` mueve el HEAD y puede borrar historial. `git revert` crea un nuevo commit que deshace los cambios, preservando el historial.'
  },
  {
    q: '¿Qué hace `git reset --hard`?',
    options: [
      'Mueve HEAD y conserva cambios en staging',
      'Mueve HEAD y conserva cambios en working directory',
      'Mueve HEAD y BORRA todos los cambios',
      'Solo muestra el diff entre commits'
    ],
    correct: 2,
    explanation: '`git reset --hard` mueve el HEAD y borra todos los cambios del staging y working directory. ¡Cuidado, es irreversible!'
  },
  {
    q: '¿Qué hace `git bisect`?',
    options: [
      'Divide una rama en dos',
      'Usa búsqueda binaria para encontrar qué commit introdujo un bug',
      'Elimina commits duplicados',
      'Crea un tag en un commit específico'
    ],
    correct: 1,
    explanation: '`git bisect` usa búsqueda binaria para encontrar automáticamente qué commit introdujo un bug, reduciendo el tiempo de búsqueda drásticamente.'
  },
  {
    q: '¿Qué prefijo de commit se usa para una nueva funcionalidad?',
    options: ['fix:', 'docs:', 'feat:', 'test:'],
    correct: 2,
    explanation: 'El prefijo `feat:` se usa para commits que añaden una nueva funcionalidad al proyecto.'
  }
];

// ── State ──
let currentLesson = 0;
let completedLessons = JSON.parse(localStorage.getItem('git-tutorial-progress') || '[]');
let quizAnswered = {};

// ── Terminal Simulations ──
const terminalStates = {
  setup: {
    history: [
      { type: 'output', text: '⚙ Terminal de práctica — Configuración de Git' },
      { type: 'output', text: 'Escribe comandos git config para practicar.' },
    ],
    historyIndex: -1
  },
  workflow: {
    files: [],
    staged: [],
    committed: [],
    history: [
      { type: 'output', text: '□ Directorio de trabajo: ~/proyecto (rama: main)' },
      { type: 'output', text: 'Practica el flujo: add → commit' },
    ],
    historyIndex: -1
  },
  stash: {
    stashCount: 0,
    stashList: [],
    files: ['app.js', 'styles.css'],
    history: [
      { type: 'output', text: '◈ Terminal de práctica — Git Stash' },
      { type: 'output', text: 'Archivos pendientes: app.js, styles.css' },
      { type: 'output', text: 'Prueba: git stash, git stash list, git stash pop' },
    ],
    historyIndex: -1
  },
  rebase: {
    rebasing: false,
    history: [
      { type: 'output', text: '↻ Terminal de práctica — Git Rebase' },
      { type: 'output', text: 'Rama actual: mi-feature (2 commits adelante de main)' },
      { type: 'output', text: 'Prueba: git rebase main, git rebase --abort, git rebase --continue' },
    ],
    historyIndex: -1
  },
  cherrypick: {
    history: [
      { type: 'output', text: '🍒 Terminal de práctica — Git Cherry-Pick' },
      { type: 'output', text: 'Commits disponibles:' },
      { type: 'output', text: '  <span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' },
      { type: 'output', text: '  <span style="color:var(--orange)">e4f5g6h</span> fix: corrige validación de email' },
      { type: 'output', text: '  <span style="color:var(--orange)">i7j8k9l</span> docs: actualiza README' },
      { type: 'output', text: 'Prueba: git cherry-pick a1b2c3d' },
    ],
    historyIndex: -1
  },
  reset: {
    commits: ['a1b2c3d', 'e4f5g6h', 'i7j8k9l'],
    history: [
      { type: 'output', text: '⏪ Terminal de práctica — Git Reset / Revert' },
      { type: 'output', text: 'Últimos 3 commits:' },
      { type: 'output', text: '  <span style="color:var(--orange)">i7j8k9l</span> feat: añade panel admin' },
      { type: 'output', text: '  <span style="color:var(--orange)">e4f5g6h</span> fix: corrige bug en login' },
      { type: 'output', text: '  <span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' },
      { type: 'output', text: 'Prueba: git reset --soft HEAD~1, git revert a1b2c3d' },
    ],
    historyIndex: -1
  },
  bisect: {
    bisecting: false,
    goodCommit: null,
    badCommit: null,
    currentCommit: null,
    commits: ['v1.0', 'v1.1', 'v1.2', 'v2.0', 'v2.1', 'HEAD'],
    history: [
      { type: 'output', text: '🔍 Terminal de práctica — Git Bisect' },
      { type: 'output', text: 'Commits: v1.0 → v1.1 → v1.2 → v2.0 → v2.1 → HEAD' },
      { type: 'output', text: 'Prueba: git bisect start, git bisect bad, git bisect good v1.0' },
    ],
    historyIndex: -1
  }
};

// ── Init ──
function init() {
  renderSidebar();
  renderLesson();
}

function renderSidebar() {
  const list = document.getElementById('lessonsList');
  let currentGroup = '';
  let html = '';

  lessons.forEach((lesson, i) => {
    if (lesson.group && lesson.group !== currentGroup) {
      currentGroup = lesson.group;
      html += `<div class="lesson-group-title">${currentGroup}</div>`;
    }
    const isActive = i === currentLesson;
    const isCompleted = completedLessons.includes(lesson.id);
    const classes = ['lesson-item'];
    if (isActive) classes.push('active');
    if (isCompleted) classes.push('completed');

    html += `
      <div class="${classes.join(' ')}" onclick="goToLesson(${i})">
        <div class="lesson-check">${isCompleted ? '✓' : ''}</div>
        <span>${lesson.icon} ${lesson.title}</span>
      </div>
    `;
  });

  list.innerHTML = html;
  updateProgress();
}

function updateProgress() {
  const total = lessons.filter(l => l.id !== 'welcome' && l.id !== 'complete').length;
  const done = completedLessons.filter(id => id !== 'welcome' && id !== 'complete').length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${pct}% completado`;
}

function renderLesson() {
  const lesson = lessons[currentLesson];
  document.getElementById('topbarTitle').textContent = lesson.icon + ' ' + lesson.title;

  let content = lesson.content();

  if (lesson.id === 'complete' || (currentLesson === lessons.length - 1 && completedLessons.includes('quiz'))) {
    content = `
      <div class="completion-banner">
        <div class="big-icon">★</div>
        <h2>¡Felicitaciones!</h2>
        <p>Has completado el tutorial de Git. Ya tienes los fundamentos para empezar a usar Git en tus proyectos y contribuir a código abierto.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="goToLesson(0)">↻ Repasar desde el inicio</button>
        </div>
      </div>
    `;
  }

  content += `
    <div class="lesson-nav">
      <button class="btn" onclick="prevLesson()" ${currentLesson === 0 ? 'style="visibility:hidden"' : ''}>← Anterior</button>
      <button class="btn btn-success" onclick="completeAndNext()">
        ${currentLesson === lessons.length - 1 ? '🏆 Finalizar' : 'Marcar completo →'}
      </button>
    </div>
  `;

  document.getElementById('contentArea').innerHTML = content;

  if (lesson.quiz) initQuiz();
  if (lesson.id === 'setup') initTerminal('setup');
  if (lesson.id === 'workflow') initTerminal('workflow');
  if (lesson.id === 'git-stash') initTerminal('stash');
  if (lesson.id === 'git-rebase') initTerminal('rebase');
  if (lesson.id === 'git-cherry-pick') initTerminal('cherrypick');
  if (lesson.id === 'git-reset-revert') initTerminal('reset');
  if (lesson.id === 'git-bisect') initTerminal('bisect');

  document.getElementById('contentArea').scrollTop = 0;
  renderSidebar();
}

function goToLesson(index) {
  currentLesson = index;
  renderLesson();
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    renderLesson();
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    renderLesson();
  }
}

function completeAndNext() {
  const lesson = lessons[currentLesson];
  if (lesson.quiz) {
    const totalQ = quizData.length;
    const answeredQ = Object.keys(quizAnswered).length;
    if (answeredQ < totalQ) {
      const feedback = document.getElementById('quizFeedback');
      if (feedback) {
        feedback.className = 'quiz-feedback show incorrect';
        feedback.textContent = `Responde todas las preguntas antes de continuar (${answeredQ}/${totalQ})`;
      }
      return;
    }
  }
  if (!completedLessons.includes(lesson.id)) {
    completedLessons.push(lesson.id);
    localStorage.setItem('git-tutorial-progress', JSON.stringify(completedLessons));
  }
  nextLesson();
}

function resetProgress() {
  if (!confirm('¿Resetear todo el progreso?')) return;
  completedLessons = [];
  quizAnswered = {};
  localStorage.removeItem('git-tutorial-progress');
  currentLesson = 0;
  renderLesson();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
}

// ── Terminal ──
function initTerminal(id) {
  const body = document.getElementById(`terminal-body-${id}`);
  if (!body) return;
  const state = terminalStates[id];
  renderTerminalOutput(id);
  setTimeout(() => {
    const input = document.getElementById(`terminal-input-${id}`);
    if (input) input.focus();
  }, 100);
}

function renderTerminalOutput(id) {
  const body = document.getElementById(`terminal-body-${id}`);
  const state = terminalStates[id];
  if (!body || !state) return;

  let html = '';
  state.history.forEach(line => {
    if (line.type === 'input') {
      html += `<div class="terminal-line"><span class="prompt">${line.prompt || '$'}</span> ${escHtml(line.text)}</div>`;
    } else if (line.type === 'branch') {
      html += `<div class="terminal-line"><span class="branch">${line.text}</span></div>`;
    } else {
      html += `<div class="terminal-line"><span class="output">${line.text}</span></div>`;
    }
  });
  body.innerHTML = html;
  body.scrollTop = body.scrollHeight;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function handleTerminalCommand(id) {
  const input = document.getElementById(`terminal-input-${id}`);
  const cmd = input.value.trim();
  input.value = '';
  if (!cmd) return;

  const state = terminalStates[id];
  const prompts = {
    setup: '~$',
    workflow: '~/proyecto (main) $',
    stash: '~/proyecto (main) $',
    rebase: '~/proyecto (mi-feature) $',
    cherrypick: '~/proyecto (main) $',
    reset: '~/proyecto (main) $',
    bisect: '~/proyecto (main) $'
  };
  const promptText = prompts[id] || '~$';
  state.history.push({ type: 'input', text: cmd, prompt: promptText });

  if (id === 'setup') handleSetupCommand(cmd, state);
  else if (id === 'workflow') handleWorkflowCommand(cmd, state);
  else if (id === 'stash') handleStashCommand(cmd, state);
  else if (id === 'rebase') handleRebaseCommand(cmd, state);
  else if (id === 'cherrypick') handleCherryPickCommand(cmd, state);
  else if (id === 'reset') handleResetCommand(cmd, state);
  else if (id === 'bisect') handleBisectCommand(cmd, state);

  renderTerminalOutput(id);
}

function handleSetupCommand(cmd, state) {
  const lower = cmd.toLowerCase();
  if (lower.includes('git config') && lower.includes('user.name')) {
    state.history.push({ type: 'output', text: '✓ Nombre configurado correctamente.' });
  } else if (lower.includes('git config') && lower.includes('user.email')) {
    state.history.push({ type: 'output', text: '✓ Email configurado correctamente.' });
  } else if (lower === 'git config --global user.name "tu nombre"' || lower === "git config --global user.name 'tu nombre'") {
    state.history.push({ type: 'output', text: '✓ Nombre configurado correctamente.' });
  } else if (lower.includes('git config') && lower.includes('user')) {
    state.history.push({ type: 'output', text: '✓ Configuración actualizada.' });
  } else if (lower === 'clear') {
    state.history = [{ type: 'output', text: '⚙ Terminal limpiada.' }];
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Prueba: git config --global user.name "Tu Nombre"' });
    state.history.push({ type: 'output', text: 'Prueba: git config --global user.email "email@ejemplo.com"' });
  } else {
    state.history.push({ type: 'output', text: '◆ Tip: Usa "git config --global user.name" o "help" para ver ayuda.' });
  }
}

function handleWorkflowCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.history = [
      { type: 'output', text: '□ Directorio de trabajo: ~/proyecto (rama: main)' },
    ];
    return;
  }

  if (lower === 'git status') {
    let output = 'On branch <span style="color:var(--green)">main</span>\n';
    if (state.files.length === 0 && state.staged.length === 0) {
      output += '\nnothing to commit, working tree clean';
    } else {
      if (state.staged.length > 0) {
        output += '\nChanges to be committed:\n';
        state.staged.forEach(f => output += `  <span style="color:var(--green)">new file:   ${f}</span>\n`);
      }
      if (state.files.length > 0) {
        output += '\nUntracked files:\n';
        state.files.forEach(f => output += `  <span style="color:var(--red)">${f}</span>\n`);
      }
    }
    state.history.push({ type: 'output', text: output });
  } else if (lower.startsWith('touch ') || lower.startsWith('echo ')) {
    const fname = cmd.split(/\s+/).pop();
    if (fname && !fname.startsWith('>') && !fname.startsWith('-')) {
      state.files.push(fname);
      state.history.push({ type: 'output', text: `□ Archivo "${fname}" creado.` });
    } else {
      state.history.push({ type: 'output', text: '□ Archivo creado.' });
    }
  } else if (lower.startsWith('git add')) {
    const target = cmd.split(/\s+/).pop();
    if (target === '.' || target === '-A') {
      state.staged.push(...state.files);
      state.files = [];
      state.history.push({ type: 'output', text: `◈ Todos los archivos añadidos al staging.` });
    } else if (state.files.includes(target)) {
      state.files = state.files.filter(f => f !== target);
      state.staged.push(target);
      state.history.push({ type: 'output', text: `◈ "${target}" añadido al staging.` });
    } else if (state.staged.includes(target)) {
      state.history.push({ type: 'output', text: `"${target}" ya está en staging.` });
    } else {
      state.history.push({ type: 'output', text: `⚠ No se encontró "${target}". Usa "git status" para ver archivos.` });
    }
  } else if (lower.startsWith('git commit')) {
    if (state.staged.length === 0) {
      state.history.push({ type: 'output', text: '⚠ Nothing to commit. Añade archivos con "git add" primero.' });
    } else {
      const msg = cmd.match(/-m\s+["'](.+?)["']/);
      if (!msg) {
        state.history.push({ type: 'output', text: '⚠ Necesitas un mensaje: git commit -m "tu mensaje"' });
      } else {
        state.committed.push({ files: [...state.staged], msg: msg[1] });
        state.history.push({ type: 'output', text: `[main ${randomHash()}] ${msg[1]}` });
        state.history.push({ type: 'output', text: `${state.staged.length} file(s) changed` });
        state.staged = [];
      }
    }
  } else if (lower === 'git log') {
    if (state.committed.length === 0) {
      state.history.push({ type: 'output', text: 'No hay commits aún.' });
    } else {
      [...state.committed].reverse().forEach((c, i) => {
        state.history.push({ type: 'output', text: `<span style="color:var(--orange)">${randomHash()}</span> (${c.files.join(', ')})` });
        state.history.push({ type: 'output', text: `    ${c.msg}` });
      });
    }
  } else if (lower.startsWith('git branch')) {
    state.history.push({ type: 'branch', text: '* <span style="color:var(--green)">main</span>' });
  } else if (lower.startsWith('git diff')) {
    state.history.push({ type: 'output', text: state.files.length > 0 ? 'Diff mostrando cambios pendientes...' : 'No hay cambios para mostrar.' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos disponibles: touch, echo, git add, git status, git commit, git log, git branch, git diff, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos disponibles.` });
  }
}

function handleStashCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.stashCount = 0;
    state.stashList = [];
    state.history = [
      { type: 'output', text: '◈ Terminal limpiada.' },
    ];
    return;
  }
  if (lower === 'git stash' || lower === 'git stash push') {
    if (state.files.length === 0) {
      state.history.push({ type: 'output', text: '⚠ No hay cambios para guardar.' });
    } else {
      state.stashCount++;
      const msg = `WIP on main: ${state.stashCount} stash(es)`;
      state.stashList.push({ id: state.stashCount, msg });
      state.history.push({ type: 'output', text: `Saved working directory and index state ${msg}` });
    }
  } else if (lower.startsWith('git stash push -m')) {
    const match = cmd.match(/-m\s+["'](.+?)["']/);
    const msg = match ? match[1] : 'Custom stash';
    state.stashCount++;
    state.stashList.push({ id: state.stashCount, msg });
    state.history.push({ type: 'output', text: `Saved working directory and index state On main: ${msg}` });
  } else if (lower === 'git stash list') {
    if (state.stashList.length === 0) {
      state.history.push({ type: 'output', text: 'No stash entries found.' });
    } else {
      [...state.stashList].reverse().forEach(s => {
        state.history.push({ type: 'output', text: `<span style="color:var(--orange)">stash@{${s.id - 1}}</span>: ${s.msg}` });
      });
    }
  } else if (lower === 'git stash pop') {
    if (state.stashList.length === 0) {
      state.history.push({ type: 'output', text: '⚠ No hay stash para recuperar.' });
    } else {
      const popped = state.stashList.pop();
      state.history.push({ type: 'output', text: `Dropped stash@{${state.stashList.length}} (${popped.msg})` });
    }
  } else if (lower === 'git stash apply') {
    if (state.stashList.length === 0) {
      state.history.push({ type: 'output', text: '⚠ No hay stash para aplicar.' });
    } else {
      state.history.push({ type: 'output', text: `Applied stash@{${state.stashList.length - 1}} exitosamente.` });
    }
  } else if (lower.startsWith('git stash drop')) {
    if (state.stashList.length === 0) {
      state.history.push({ type: 'output', text: '⚠ No hay stash para eliminar.' });
    } else {
      state.stashList.pop();
      state.history.push({ type: 'output', text: 'Stash eliminado.' });
    }
  } else if (lower === 'git stash clear') {
    state.stashList = [];
    state.history.push({ type: 'output', text: 'Todos los stash fueron eliminados.' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos: git stash, git stash push -m "msg", git stash list, git stash pop, git stash apply, git stash drop, git stash clear, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos.` });
  }
}

function handleRebaseCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.rebasing = false;
    state.history = [
      { type: 'output', text: '↻ Terminal limpiada.' },
    ];
    return;
  }
  if (lower === 'git rebase main' || lower === 'git rebase origin/main') {
    state.rebasing = true;
    state.history.push({ type: 'output', text: 'Rebasing main onto <span style="color:var(--green)">main</span>...' });
    state.history.push({ type: 'output', text: 'Successfully rebased and updated refs/heads/mi-feature.' });
    state.rebasing = false;
  } else if (lower === 'git rebase -i main') {
    state.rebasing = true;
    state.history.push({ type: 'output', text: 'Rebase interactivo iniciado sobre main...' });
    state.history.push({ type: 'output', text: 'pick <span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' });
    state.history.push({ type: 'output', text: 'pick <span style="color:var(--orange)">e4f5g6h</span> fix: corrige validación' });
    state.history.push({ type: 'output', text: '' });
    state.history.push({ type: 'output', text: '# Edita el archivo para reordenar, squash o editar commits' });
    state.rebasing = false;
  } else if (lower === 'git rebase --abort') {
    if (state.rebasing) {
      state.rebasing = false;
      state.history.push({ type: 'output', text: 'Rebase abortado. Volviendo al estado anterior.' });
    } else {
      state.history.push({ type: 'output', text: '⚠ No hay rebase en progreso.' });
    }
  } else if (lower === 'git rebase --continue') {
    if (state.rebasing) {
      state.rebasing = false;
      state.history.push({ type: 'output', text: 'Rebase completado exitosamente.' });
    } else {
      state.history.push({ type: 'output', text: '⚠ No hay rebase en progreso.' });
    }
  } else if (lower === 'git log --oneline -5' || lower === 'git log') {
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">f9g0h1i</span> feat: añade panel admin' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">z9y8x7w</span> docs: actualiza README' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos: git rebase main, git rebase -i main, git rebase --abort, git rebase --continue, git log, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos.` });
  }
}

function handleCherryPickCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.history = [
      { type: 'output', text: '🍒 Terminal limpiada.' },
    ];
    return;
  }
  if (lower.startsWith('git cherry-pick') && !lower.includes('--')) {
    const parts = cmd.split(/\s+/);
    const hash = parts[parts.length - 1];
    const commits = {
      'a1b2c3d': 'feat: añade botón de login',
      'e4f5g6h': 'fix: corrige validación de email',
      'i7j8k9l': 'docs: actualiza README'
    };
    if (commits[hash]) {
      state.history.push({ type: 'output', text: `[main ${randomHash()}] ${commits[hash]}` });
      state.history.push({ type: 'output', text: ` 1 file changed, 15 insertions(+), 2 deletions(-)` });
    } else {
      state.history.push({ type: 'output', text: `⚠ Commit "${hash}" no encontrado.` });
    }
  } else if (lower === 'git cherry-pick --abort') {
    state.history.push({ type: 'output', text: 'Cherry-pick abortado.' });
  } else if (lower === 'git log --oneline -5' || lower === 'git log') {
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">i7j8k9l</span> docs: actualiza README' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">e4f5g6h</span> fix: corrige validación de email' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos: git cherry-pick <hash>, git cherry-pick --abort, git log, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos.` });
  }
}

function handleResetCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.history = [
      { type: 'output', text: '⏪ Terminal limpiada.' },
    ];
    return;
  }
  if (lower.includes('git reset --soft')) {
    state.history.push({ type: 'output', text: '✓ HEAD movido. Cambios conservados en staging area.' });
  } else if (lower.includes('git reset --mixed') || lower === 'git reset') {
    state.history.push({ type: 'output', text: '✓ HEAD movido. Cambios en directorio de trabajo (sin staging).' });
  } else if (lower.includes('git reset --hard')) {
    state.history.push({ type: 'output', text: '⚠ HEAD movido. Todos los cambios fueron DESCARTADOS.' });
    state.history.push({ type: 'output', text: '<span style="color:var(--red)">¡Cuidado! Esta acción no se puede deshacer.</span>' });
  } else if (lower.startsWith('git revert')) {
    const parts = cmd.split(/\s+/);
    const hash = parts[parts.length - 1];
    if (hash && hash !== 'git') {
      state.history.push({ type: 'output', text: `[main ${randomHash()}] Revert "${hash}"` });
      state.history.push({ type: 'output', text: ' 1 file changed, 3 insertions(+), 15 deletions(-)' });
      state.history.push({ type: 'output', text: '✓ Commit de revert creado. El historial se preserva.' });
    } else {
      state.history.push({ type: 'output', text: '⚠ Necesitas especificar un hash: git revert a1b2c3d' });
    }
  } else if (lower === 'git log --oneline -5' || lower === 'git log') {
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">i7j8k9l</span> feat: añade panel admin' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">e4f5g6h</span> fix: corrige bug en login' });
    state.history.push({ type: 'output', text: '<span style="color:var(--orange)">a1b2c3d</span> feat: añade botón de login' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos: git reset --soft/mixed/hard HEAD~1, git revert <hash>, git log, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos.` });
  }
}

function handleBisectCommand(cmd, state) {
  const lower = cmd.toLowerCase().trim();
  if (lower === 'clear') {
    state.bisecting = false;
    state.goodCommit = null;
    state.badCommit = null;
    state.history = [
      { type: 'output', text: '🔍 Terminal limpiada.' },
    ];
    return;
  }
  if (lower === 'git bisect start') {
    state.bisecting = true;
    state.history.push({ type: 'output', text: 'Bisectando...' });
  } else if (lower === 'git bisect bad') {
    if (!state.bisecting) {
      state.history.push({ type: 'output', text: '⚠ Primero ejecuta: git bisect start' });
    } else {
      state.badCommit = 'HEAD';
      state.history.push({ type: 'output', text: '<span style="color:var(--red)">HEAD</span> marcado como malo (tiene el bug).' });
      if (state.goodCommit) {
        state.history.push({ type: 'output', text: 'Bisectando: 6 revisiones para probar.' });
        state.history.push({ type: 'output', text: `Probando: <span style="color:var(--orange)">v1.2</span>...` });
      }
    }
  } else if (lower.startsWith('git bisect good')) {
    if (!state.bisecting) {
      state.history.push({ type: 'output', text: '⚠ Primero ejecuta: git bisect start' });
    } else {
      const parts = cmd.split(/\s+/);
      state.goodCommit = parts[parts.length - 1] || 'v1.0';
      state.history.push({ type: 'output', text: `<span style="color:var(--green)">${state.goodCommit}</span> marcado como bueno (sin el bug).` });
      if (state.badCommit) {
        state.history.push({ type: 'output', text: '✓ Bisect completado!' });
        state.history.push({ type: 'output', text: `<span style="color:var(--red)">a1b2c3d</span> es el commit que introdujo el bug.` });
        state.bisecting = false;
      }
    }
  } else if (lower === 'git bisect reset') {
    state.bisecting = false;
    state.goodCommit = null;
    state.badCommit = null;
    state.history.push({ type: 'output', text: 'Bisect reset. Volviendo a la rama original.' });
  } else if (lower === 'help') {
    state.history.push({ type: 'output', text: 'Comandos: git bisect start, git bisect bad, git bisect good <hash>, git bisect reset, clear' });
  } else {
    state.history.push({ type: 'output', text: `◆ Comando no simulado: "${cmd}". Escribe "help" para ver comandos.` });
  }
}

function randomHash() {
  return Math.random().toString(16).slice(2, 9);
}

// ── Quiz ──
function initQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;
  let html = '';

  quizData.forEach((q, qi) => {
    html += `<div class="quiz-container" id="quiz-${qi}">`;
    html += `<div class="quiz-question">${qi + 1}. ${q.q}</div>`;
    html += `<div class="quiz-options">`;
    q.options.forEach((opt, oi) => {
      html += `<div class="quiz-option" id="quiz-${qi}-opt-${oi}" onclick="answerQuiz(${qi}, ${oi})">${opt}</div>`;
    });
    html += `</div>`;
    html += `<div class="quiz-feedback" id="quiz-feedback-${qi}"></div>`;
    html += `</div>`;
  });

  html += `<div class="quiz-feedback" id="quizFeedback" style="margin-top:16px;text-align:center;"></div>`;
  container.innerHTML = html;
}

function answerQuiz(qi, oi) {
  if (quizAnswered[qi] !== undefined) return;
  quizAnswered[qi] = oi;

  const q = quizData[qi];
  const isCorrect = oi === q.correct;

  // Disable all options in this question
  q.options.forEach((_, i) => {
    const el = document.getElementById(`quiz-${qi}-opt-${i}`);
    el.classList.add('disabled');
    if (i === q.correct) el.classList.add('correct');
    if (i === oi && !isCorrect) el.classList.add('incorrect');
  });

  const feedback = document.getElementById(`quiz-feedback-${qi}`);
  feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
  feedback.textContent = (isCorrect ? '✓ Correcto! ' : '✗ Incorrecte. ') + q.explanation;

  // Check if all answered
  const totalQ = quizData.length;
  const answeredQ = Object.keys(quizAnswered).length;
  if (answeredQ === totalQ) {
    const correctCount = Object.entries(quizAnswered).filter(([k, v]) => quizData[k].correct === v).length;
    const mainFeedback = document.getElementById('quizFeedback');
    mainFeedback.className = `quiz-feedback show ${correctCount >= quizData.length * 0.7 ? 'correct' : 'incorrect'}`;
    mainFeedback.textContent = `Obtuviste ${correctCount}/${totalQ} respuestas correctas. ${correctCount === totalQ ? '¡Perfecto! 🎉' : correctCount >= quizData.length * 0.7 ? '¡Buen trabajo! 👏' : '¡Repasa las lecciones y vuelve a intentarlo!'}`;
  }
}

// ── Copy Code ──
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = '✓ Copiado';
    setTimeout(() => btn.textContent = 'Copiar', 1500);
  });
}

// ── Keyboard shortcuts ──
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && !e.target.matches('input,textarea')) {
    if (currentLesson < lessons.length - 1) nextLesson();
  }
  if (e.key === 'ArrowLeft' && !e.target.matches('input,textarea')) {
    prevLesson();
  }
});

// ── Matrix Rain Background ──
(function initMatrix() {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  const gitCommands = [
    'git add', 'git commit', 'git push', 'git pull', 'git clone',
    'git merge', 'git branch', 'git checkout', 'git init', 'git status',
    'git fetch', 'git rebase', 'git stash', 'git log', 'git diff',
    'git remote', 'git tag', 'git reset', 'git revert', 'git config',
    'HEAD', 'origin/main', 'fast-forward', 'conflict', 'stage',
    'working dir', 'repository', 'fork', 'PR', 'main', 'develop',
    '-b feature', '-m "feat:"', 'git switch', 'git restore',
    'git clean', 'git blame', 'git shortlog', 'git describe',
  ];

  const fontSize = 14;
  let columns, drops, chars, speeds, bright;
  let mouseX = -1000, mouseY = -1000;
  const mouseRadius = 120;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    columns = Math.floor(canvas.width / fontSize);
    const oldDrops = drops || [];
    drops = [];
    chars = [];
    speeds = [];
    bright = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = oldDrops[i] || Math.random() * -100;
      chars[i] = gitCommands[Math.floor(Math.random() * gitCommands.length)];
      speeds[i] = 0.3 + Math.random() * 0.7;
      bright[i] = 0;
    }
  }

  resize();
  window.addEventListener('resize', resize);

  // Track mouse on the whole document
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  function draw() {
    // Fade trail
    ctx.fillStyle = 'rgba(13, 17, 23, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < columns; i++) {
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Mouse interaction: brighten nearby columns
      const canvasLeft = canvas.getBoundingClientRect().left;
      const dx = x + fontSize / 2 - (mouseX - canvasLeft);
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouseRadius) {
        bright[i] = Math.min(bright[i] + 0.15, 1);
      } else {
        bright[i] *= 0.97;
      }

      // Randomly change the command text
      if (Math.random() > 0.98) {
        chars[i] = gitCommands[Math.floor(Math.random() * gitCommands.length)];
      }

      const cmd = chars[i];

      // Draw the command
      if (bright[i] > 0.1) {
        // Bright / mouse-proximate
        const g = Math.floor(185 + 70 * bright[i]);
        const b = Math.floor(80 + 175 * bright[i]);
        ctx.fillStyle = `rgba(88, ${g}, ${b}, ${0.7 + bright[i] * 0.3})`;
      } else {
        // Normal dim green
        const alpha = 0.15 + Math.random() * 0.1;
        ctx.fillStyle = `rgba(63, 185, 80, ${alpha})`;
      }

      // Clip to canvas bounds
      if (y > -fontSize && y < canvas.height + fontSize) {
        ctx.fillText(cmd, x, y);
      }

      // Reset drop when it goes off screen
      if (y > canvas.height + Math.random() * 500) {
        drops[i] = Math.random() * -20;
        chars[i] = gitCommands[Math.floor(Math.random() * gitCommands.length)];
        speeds[i] = 0.3 + Math.random() * 0.7;
      }

      drops[i] += speeds[i];
    }

    requestAnimationFrame(draw);
  }

  draw();
})();

init();
