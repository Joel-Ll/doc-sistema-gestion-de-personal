---
id: main-ts
title: main.ts
sidebar_label: main.ts
---

El archivo `main.ts` es el punto de entrada de la aplicación NestJS. Es responsable de crear la aplicación, configurar middleware, filtros y la documentación Swagger.

## Dependencias

El archivo `main.ts` utiliza las siguientes dependencias:

- `@nestjs/core`: Biblioteca principal de NestJS.
- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.
- `express`: Framework web para Node.js.
- `./permission/permission.service`: Servicio de permisos personalizado.

## Uso

El código en `main.ts` sigue el siguiente flujo de ejecución:

1. Se importa `NestFactory` de `@nestjs/core` para crear una instancia de la aplicación NestJS.
2. `AppModule` se importa desde `./app.module` y representa el módulo principal de la aplicación.
3. Se importa `DocumentBuilder` y `SwaggerModule` de `@nestjs/swagger` para configurar la documentación Swagger.
4. Se importa `express` para utilizarlo como middleware en la aplicación.
5. Se importa el servicio `PermissionService` desde `./permission/permission.service` para configurar permisos predeterminados.

6. Se define la función asincrónica `bootstrap` que se encarga de inicializar la aplicación.
7. Dentro de `bootstrap`, se crea una instancia de la aplicación utilizando `NestFactory.create` y se habilita el CORS.
8. Se utiliza el middleware `express.json` para analizar las solicitudes entrantes en formato JSON.
9. Se establece el prefijo global de la API como `/api` mediante `app.setGlobalPrefix('api')`.

10. Se obtiene una instancia del servicio `PermissionService` mediante `app.get(PermissionService)` y se configuran los permisos predeterminados llamando a `setPermissionDefault()`.

11. Se configura la documentación Swagger utilizando `DocumentBuilder` para especificar los detalles de la API, como el título, descripción, versión y etiquetas.
12. Se genera el documento Swagger utilizando `SwaggerModule.createDocument` pasando la aplicación y la configuración de Swagger.
13. Se configura la ruta de la documentación Swagger mediante `SwaggerModule.setup` para que esté disponible en `/api`.

14. Finalmente, la aplicación se pone en escucha en el puerto especificado en `process.env.PORT` utilizando `app.listen(process.env.PORT)`.