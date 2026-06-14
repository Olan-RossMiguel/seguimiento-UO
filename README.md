# SSEUO — Sistema de Seguimiento de Egresados

Sistema web institucional para el registro, seguimiento y gestión de egresados universitarios.

---

## 🧩 Módulos

| # | Módulo | Descripción |
|---|--------|-------------|
| i | Registro y gestión de egresados | Validación de matrícula contra la base de datos Oracle 10g institucional (solo lectura) |
| ii | Autenticación | Inicio de sesión y gestión de sesiones de usuario |
| iii | Perfil del egresado | Actualización de información personal y laboral |
| iv | Encuestas | Seguimiento de egresados mediante encuestas configurables |
| v | Bolsa de trabajo | Publicación y consulta de ofertas laborales |
| vi | Reportes estadísticos | Generación de reportes y análisis de datos |
| vii | Panel de administración | Gestión integral con exportación en formatos XLS y PDF |

---

## 🛠️ Stack tecnológico

- **Backend:** Laravel 11 (PHP) — patrón MVC
- **Base de datos principal:** PostgreSQL 17
- **Integración:** Oracle 10g institucional (acceso de solo lectura)
- **Control de versiones:** Git
- **Gestión del proyecto:** Notion

---

## 📦 Entregables

1. Documento de análisis de requerimientos
2. Documento de diseño del sistema (arquitectura, modelo entidad-relación, prototipos de interfaz)
3. Código fuente completo del sistema
4. Scripts de creación de base de datos
5. Informe de pruebas
6. Sistema instalado en el servidor institucional
7. Manual técnico de instalación
8. Manual de usuario

---

## 🚫 Fuera del alcance

Los siguientes elementos quedan **expresamente excluidos** del proyecto:

- Modificaciones al sistema escolar existente
- Migración de la base de datos Oracle
- Desarrollo de aplicaciones móviles

---

## 🚀 Instalación

> Consulta el **Manual técnico de instalación** (entregable #7) para instrucciones detalladas de despliegue en el servidor institucional.

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sseuo.git
cd sseuo

# Instalar dependencias
composer install

# Configurar variables de entorno
cp .env.example .env
php artisan key:generate

# Ejecutar migraciones
php artisan migrate
```

---

## 📄 Licencia

Uso institucional. Todos los derechos reservados.