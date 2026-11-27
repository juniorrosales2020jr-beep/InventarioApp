
# InventarioApp

![NativeScript](https://img.shields.io/badge/NativeScript-9.1-3655FF)
![Angular](https://img.shields.io/badge/Angular-22-DD0031)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6)
![Android](https://img.shields.io/badge/Android-Compatible-3DDC84)
![Version](https://img.shields.io/badge/Version-1.0.0-183C65)

## Descripción

InventarioApp es una aplicación móvil de gestión de inventario
desarrollada con NativeScript, Angular y TypeScript.

El proyecto forma parte de las actividades académicas del
Módulo 2 del curso NativeScript, Angular y Redux.

La aplicación permite consultar productos, realizar búsquedas,
visualizar información detallada, modificar categorías,
incorporar nuevos productos y seleccionar productos destacados
mediante gestos y animaciones.

## Objetivos

- Crear formularios interactivos con NativeScript y Angular.
- Implementar listados de productos mediante ListView.
- Utilizar componentes, módulos y servicios de Angular.
- Implementar navegación entre diferentes pantallas.
- Mejorar la experiencia de usuario mediante gestos y animaciones.
- Incorporar recursos gráficos y pantallas de bienvenida.
- Aplicar una identidad visual consistente.

## Características principales

### Inicio

Panel de información general del inventario que muestra:

- Cantidad de productos registrados.
- Total de unidades disponibles.
- Cantidad de categorías.
- Cantidad de productos destacados.
- Valor total del inventario en lempiras.
- Accesos rápidos a las principales funcionalidades.

### Productos

- Listado de productos mediante ListView.
- Plantillas personalizadas con FlexboxLayout.
- Actualización mediante Pull to Refresh.
- Incorporación de productos aleatorios.
- Modificación de categorías mediante un diálogo Action.
- Notificaciones Toast.
- Navegación hacia el detalle del producto.

### Buscar productos

- Formulario de búsqueda interactivo.
- Two-way data binding mediante ngModel.
- Directiva personalizada de validación.
- Validación de longitud mínima de tres caracteres.
- Contador de resultados.
- Limpieza del formulario.
- Navegación hacia el detalle del producto.

### Productos destacados

- Listado de productos del inventario.
- Selección mediante el gesto Long Press.
- Animación de rotación de 360 grados.
- Cambio dinámico de color de la estrella.
- Contador de productos destacados.
- Notificaciones Toast.

### Detalle del producto

Visualización de:

- Nombre.
- Precio.
- Categoría.
- Existencias.
- Descripción.
- Icono representativo del producto.

### Configuración

- Información general de la aplicación.
- Versión del proyecto.
- Detección de plataforma.
- Tecnologías utilizadas.
- Información sobre el almacenamiento.
- Diálogo informativo Acerca de InventarioApp.

## Requisitos académicos

El proyecto implementa los diez requisitos correspondientes
a la actividad del Módulo 2.

| N.º | Requisito | Implementación |
|---|---|---|
| 1 | ListView con plantilla FlexboxLayout | SearchComponent |
| 2 | Navegación al detalle mediante RouterExtensions | SearchComponent y DetalleComponent |
| 3 | Plugin Pull to Refresh | BrowseComponent |
| 4 | Diálogo Action para modificar atributos | Cambio de categoría en BrowseComponent |
| 5 | Notificación Toast | Toast nativo de Android |
| 6 | Two-way data binding | Formulario de búsqueda con ngModel |
| 7 | Validador personalizado | LongitudMinimaDirective |
| 8 | Detección de gestos | Long Press en FeaturedComponent |
| 9 | Animación de iconos | Rotación de la estrella de destacados |
| 10 | Splash Screen personalizado | Recursos nativos de Android |

## Tecnologías utilizadas

| Tecnología | Versión o referencia |
|---|---|
| NativeScript Core | 9.1.x |
| NativeScript Angular | 22.0.x |
| Angular | 22.0.x |
| TypeScript | 6.0.x |
| NativeScript Android | 9.1.3 |
| NativeScript Theme | 3.1.x |
| NativeScript Webpack | 5.0.x |
| RxJS | 7.8.x |
| Zone.js | 0.16.x |
| NativeScript UI SideDrawer | 15.2.x |
| Pull to Refresh | 2.5.11 |
| Font Awesome | Iconos gráficos |

Las versiones exactas de las dependencias instaladas
se encuentran registradas en package-lock.json.

## Arquitectura del proyecto

La aplicación utiliza una arquitectura modular basada en
componentes, módulos, servicios y rutas de Angular.

Cada funcionalidad principal cuenta con su propio módulo
y configuración de navegación.

El servicio ProductosService centraliza la gestión de los
productos y comparte la información entre los componentes
mediante la inyección de dependencias de Angular.

## Estructura de carpetas

```text
InventarioApp/
├── App_Resources/
│   └── Android/
│       └── src/main/res/
│           ├── drawable/
│           ├── drawable-nodpi/
│           ├── mipmap-anydpi-v26/
│           ├── mipmap-mdpi/
│           ├── mipmap-hdpi/
│           ├── mipmap-xhdpi/
│           ├── mipmap-xxhdpi/
│           ├── mipmap-xxxhdpi/
│           ├── values/
│           └── values-v31/
├── src/
│   ├── app/
│   │   ├── browse/
│   │   ├── detalle/
│   │   ├── directivas/
│   │   │   └── longitud-minima.directive.ts
│   │   ├── domain/
│   │   │   ├── producto.model.ts
│   │   │   └── productos.service.ts
│   │   ├── featured/
│   │   ├── home/
│   │   ├── search/
│   │   ├── settings/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── _app-common.scss
│   └── main.ts
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Navegación

| Ruta | Pantalla |
|---|---|
| /home | Panel de inicio |
| /browse | Productos |
| /search | Buscar productos |
| /featured | Productos destacados |
| /settings | Configuración |
| /detalle/:id | Detalle del producto |

La navegación principal se realiza mediante un menú lateral
personalizado utilizando NativeScript UI SideDrawer.

## Identidad visual

InventarioApp utiliza una identidad visual basada en colores
azules, fondos claros y tarjetas de información.

| Elemento | Color |
|---|---|
| Color principal | #183C65 |
| Fondo general | #F1F5F9 |
| Tarjetas | #FFFFFF |
| Texto secundario | #64748B |
| Existencias | #15803D |
| Productos destacados | #F59E0B |
| Mensajes de validación | #DC2626 |
| Elementos seleccionados | #E0ECFA |
| Bordes | #E2E8F0 |

La aplicación incorpora:

- Barras superiores personalizadas.
- Menú lateral en español.
- Tarjetas de productos.
- Iconos Font Awesome.
- Splash Screen personalizado.
- Icono adaptativo de Android.
- Iconos PNG para diferentes densidades de pantalla.

## Instalación y ejecución

### Requisitos previos

- Node.js compatible con Angular y NativeScript.
- npm.
- NativeScript CLI.
- Java Development Kit.
- Android Studio.
- Android SDK.
- Emulador Android o dispositivo físico.
- Git.

El entorno utilizado durante el desarrollo incluye Node.js 22,
NativeScript CLI 9.1 y Java 21.

### Instalar NativeScript CLI

```bash
npm install -g nativescript
```

### Instalar las dependencias

Desde la carpeta raíz del proyecto:

```bash
npm ci
```

### Verificar el entorno Android

```bash
ns doctor android
```

### Ejecutar la aplicación

Iniciar un emulador Android o conectar un dispositivo físico.

```bash
ns run android
```

### Depurar la aplicación

```bash
ns debug android
```

## Plugin Pull to Refresh

La aplicación utiliza el siguiente paquete:

```text
@nativescript-community/ui-pulltorefresh
```

Versión utilizada:

```text
2.5.11
```

El plugin permite actualizar el listado mediante un gesto
de desplazamiento hacia abajo e incorporar nuevos productos.

## Gestión de datos

El modelo Producto representa los elementos del inventario
mediante los siguientes atributos:

- id
- nombre
- descripcion
- precio
- stock
- categoria
- imagen
- destacado

El servicio ProductosService permite:

- Buscar productos.
- Obtener productos mediante su identificador.
- Agregar nuevos productos.
- Actualizar productos existentes.
- Cambiar categorías.
- Alternar productos destacados.
- Obtener los productos destacados.

## Limitaciones actuales

- Los datos se almacenan temporalmente en memoria.
- No se utiliza una base de datos persistente.
- Los cambios se pierden al reiniciar el proceso de la aplicación.
- No se requiere un servidor backend.
- No se ha implementado Redux en esta etapa.
- La aplicación ha sido desarrollada y probada en Android.
- La ejecución en iOS no ha sido verificada.
- Los recursos personalizados de inicio e icono corresponden a Android.
- Las dependencias requieren una revisión de seguridad antes de
  utilizar la aplicación en producción.

## Posibles mejoras futuras

- Integración con Redux para la gestión del estado.
- Almacenamiento persistente.
- Integración con una API REST.
- Registro y edición avanzada de productos.
- Eliminación de productos.
- Gestión de usuarios.
- Reportes de inventario.
- Lectura de códigos de barras.
- Compatibilidad y pruebas en iOS.

## Información académica

**Curso:** NativeScript, Angular y Redux

**Módulo:** 2

**Proyecto:** InventarioApp

**Versión:** 1.0.0

**Año:** 2026

---

Desarrollado con NativeScript, Angular y TypeScript
como proyecto académico.
