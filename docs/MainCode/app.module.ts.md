---
id: api-module-ts
title: api.module.ts
sidebar_label: api.module.ts
---

El archivo `api.module.ts` define el módulo `ApiModule`, el cual es responsable de la configuración y la agrupación de los componentes relacionados con la API, como el servicio y el controlador. Este módulo utiliza `@nestjs/common` y `@nestjs/axios` para importar dependencias necesarias y realizar la configuración.

## Código Fuente
```typescript

```

## Dependencias
El archivo `api.module.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para la definición de módulos y decoradores comunes.
- `./api.service`: Servicio que contiene la lógica de la API.
- `./api.controller`: Controlador que maneja las rutas relacionadas con la API.
- `@nestjs/axios`: Módulo para realizar solicitudes HTTP utilizando Axios.

## Uso
El código en `api.module.ts` contiene lo siguiente:

1. Se importa el decorador `Module` desde` @nestjs/common` para definir el módulo `ApiModule`.

2. Se importa `ApiService` desde `./api.service` para utilizarlo como proveedor en el módulo.

3. Se importa `ApiController` desde `./api.controller` para utilizarlo como controlador en el módulo.

4. Se importa `HttpModule` desde `@nestjs/axios` para proporcionar funcionalidades de solicitud HTTP.

5. Se define la clase `ApiModule` con el decorador `@Module`.

6. Se utiliza la propiedad `imports` para importar `HttpModule`, lo que permite utilizar las funcionalidades de solicitud HTTP proporcionadas por `@nestjs/axios`.

7. Se utiliza la propiedad `providers` para proporcionar el servicio `ApiService` como dependencia inyectable en el módulo.

8. Se utiliza la propiedad `controllers` para registrar el controlador `ApiController` en el módulo. 