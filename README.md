# Resumen App

Una aplicación web que automatiza la generación de resúmenes de artículos utilizando inteligencia artificial. Simplemente proporciona una URL y obtén un resumen conciso de los aspectos más importantes del contenido.

## 🚀 Características

- **Resúmenes automáticos**: Genera resúmenes inteligentes de artículos web
- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Cursor interactivo**: Experiencia visual mejorada con efectos de cursor
- **Responsive**: Optimizado para dispositivos móviles y desktop

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo rápida
- **Tailwind CSS** - Framework de estilos utilitarios
- **DaisyUI** - Componentes UI para Tailwind CSS
- **Bun** - Runtime y gestor de paquetes

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd resumen-app
```

2. Instala las dependencias:
```bash
bun install
```

## 🚀 Uso

### Desarrollo
```bash
bun run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Construcción para producción
```bash
bun run build
```

### Vista previa de la construcción
```bash
bun run preview
```

### Linting
```bash
bun run lint
```

## 🎯 Cómo usar la aplicación

1. Ingresa la URL de un artículo en el campo de texto
2. Haz clic en el botón "Resumir" ✨
3. Espera a que la IA genere tu resumen automáticamente

## 📁 Estructura del proyecto

```
resumen-app/
├── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── vite-env.d.ts    # Tipos de Vite
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── vite.config.ts       # Configuración de Vite
└── README.md           # Este archivo
```

## 🔧 Configuración de desarrollo

Este proyecto utiliza:
- **ESLint** para el análisis de código
- **TypeScript** para el tipado estático
- **Tailwind CSS** con **DaisyUI** para los estilos
- **Vite** con **SWC** para compilación rápida

## 📝 Scripts disponibles

- `bun run dev` - Inicia el servidor de desarrollo
- `bun run build` - Construye la aplicación para producción
- `bun run lint` - Ejecuta el linter de código
- `bun run preview` - Previsualiza la construcción de producción

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.
