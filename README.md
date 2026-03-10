# 🐾 Sistema PetLife – Gestión Veterinaria

Aplicación web desarrollada con **Angular** que permite gestionar mascotas y citas dentro de una clínica veterinaria.
El sistema facilita el registro de mascotas, la visualización de registros y la programación de citas médicas.

# Tecnologías utilizadas

El proyecto fue desarrollado utilizando las siguientes tecnologías:

* **Angular**
* **TypeScript**
* **Bootstrap**
* **HTML5**
* **CSS3**

Estas tecnologías permiten crear una aplicación web moderna, modular y escalable.

# Arquitectura del proyecto

El proyecto está organizado siguiendo una **arquitectura modular recomendada en Angular**, separando responsabilidades para facilitar el mantenimiento y la escalabilidad.

Estructura principal:

src/app
├── core
│   └── models
│
├── features
│   ├── mascotas
│   │   ├── pages
│   │   └── services
│   │
│   └── citas
│       ├── pages
│       └── services
│
├── shared
│   ├── directives
│   └── pipes

Esta estructura permite:

* Separar funcionalidades por módulos
* Reutilizar código
* Mantener una organización clara del proyecto
# Funcionalidades del sistema

El sistema permite realizar las siguientes acciones:

✔ Registrar nuevas mascotas
✔ Visualizar la lista de mascotas registradas
✔ Agendar citas veterinarias
✔ Visualizar las citas registradas
✔ Navegar entre secciones mediante una barra de navegación
✔ Visualización de datos en tablas con Bootstrap
✔ Uso de un **Pipe personalizado** para formatear fechas
✔ Uso de una **Directiva personalizada** para resaltar citas próximas

# Programación Orientada a Objetos

Durante el desarrollo del sistema se aplicaron conceptos fundamentales de **Programación Orientada a Objetos (POO)**:

* **Abstracción**
* **Herencia**
* **Encapsulamiento**
* **Interfaces**

Ejemplo aplicado en el proyecto:

Persona (Clase abstracta)
⬇
Duenio (Clase que hereda de Persona)

Esto permite reutilizar atributos y comportamientos, mejorando la organización del código.

# Instalación del proyecto

Para ejecutar el proyecto en tu entorno local sigue estos pasos:

### 1. Clonar el repositorio

git clone repositorio

### 2. Instalar dependencias

npm install

### 3. Ejecutar la aplicación

ng serve

### 4. Abrir en el navegador

http://localhost:4200

---

# Evidencias de funcionamiento

El sistema permite:

1. Registrar mascotas
2. Visualizar lista de mascotas
3. Agendar citas
4. Visualizar citas programadas

