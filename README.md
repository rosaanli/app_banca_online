# Banca Online

Aplicación web full-stack de banca online desarrollada como proyecto
educativo aplicando tecnologías modernas y buenas prácticas de ingeniería
de software.

## 🎯 Características

- **Autenticación**: Sistema de login seguro con validación de credenciales
- **Gestión de Cuentas**: Visualización y administración de múltiples cuentas bancarias
- **Movimientos**: Historial detallado de transacciones por cuenta
- **Transferencias**: Realización de transferencias entre cuentas
- **Diseño Responsivo**: Interfaz moderna y adaptada a diferentes dispositivos
- **Testing**: Cobertura de tests automatizados
- **Arquitectura Escalable**: Estructura modular facilitando el mantenimiento y expansión

## 🛠️ Tecnologías

### Frontend
- **React** 18.2 - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Bundler de aplicaciones web
- **React Router** - Enrutamiento de aplicaciones
- **Axios** - Cliente HTTP
- **CSS Modules** - Estilos encapsulados

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Mock Server** - API simulada

### Testing & QA
- **Vitest** - Framework de testing
- **Jest Types** - Configuración de testing

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar tests
npm test

# Ver cobertura
npm run coverage



************************************************

## Acceso

Para poder logarse en la aplicación, se debe utilizar el siguiente usuario y contraseña:

```bash
Usuario: admin@email.com
Contraseña: test
```

## Descripción

La aplicación consiste en una banca online, donde el usuario puede ver sus cuentas, ver los movimientos de una cuenta y hacer transferencias.

Vamos a tener las siguientes pantallas:

- Login
- Mis cuentas
- Creación y edición de cuentas
- Movimientos de una cuenta
- Transferencias tanto desde un enlace cómo a partir de movimientos hacer una transferencia desde una cuenta determinada.

- La aplicación está desarrollada con React.
- El backend está montado sobre JSON Server.
- La aplicación es responsive.
- La aplicación tiene un menú superior con las siguientes opciones:
  - Mis cuentas
  - Transferencias
  - Movimientos, solo se quiere ver los movimientos de una cuenta.

## Servidor

El servidor está montado sobre JSON Server, y tiene los siguientes endpoints:

- La URL base es: http://localhost:3000/api, se puede cambiar el puerto en el fichero package.json.
- Para obtener el listado de cuentas: GET /account-list
- Para obtener una cuenta: GET /account-list/:id
- Para crear una cuenta: POST /account-list
- Para editar una cuenta: PATCH /account-list/:id, por el tema que cuando se crea una cuenta en backend se asignan unos campos específicos, que se pueden ver en el fichero account.middleware.js.
- Para obtener los movimientos de una cuenta: GET /movements/:id
- Para hacer una transferencia: POST /transfer.


## 📁 Estructura del Proyecto

├── src/
│   ├── pages/          # Páginas de la aplicación
│   ├── layouts/        # Layouts y componentes base
│   ├── core/           # Contextos y enrutamiento
│   └── components/     # Componentes reutilizables
├── server/             # Backend mock
├── config/             # Configuración
└── public/             # Archivos estáticos