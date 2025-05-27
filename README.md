# Desafío Técnico - Backend Junior

API REST desarrollada en **Node.js + Express + PostgreSQL** para la gestión de productos.

---

## 📦 Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg
- dotenv

---

## ⚙️ Configuración del proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/LucianoRodon/Desafio-Tecnico-Backend-Junior.git
```
### 2. Instalar dependencias 
```bash
npm install
```
### 3. Crear la Base de Datos
Ejecutar el script db.sql en PostgreSQL
### 4. Crear un archivo .env en la raíz del proyecto basado en .env.example y completar con tus datos
### 🚀 Ejecutar el servidor
```bash
node index.js
```
### 📡 Endpoints disponibles

| Método | Ruta            | Descripción                |
| ------ | --------------- | -------------------------- |
| GET    | /productos      | Listar todos los productos |
| GET    | /productos/\:id | Obtener un producto por ID |
| POST   | /productos      | Crear un nuevo producto    |
| PUT    | /productos/\:id | Actualizar un producto     |
| DELETE | /productos/\:id | Eliminar un producto       |
