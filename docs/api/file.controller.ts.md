---
id: api-controller-ts
title: api.controller.ts
sidebar_label: api.controller.ts
---

El archivo `api.controller.ts` define el controlador `ApiController` que maneja las rutas relacionadas con la API. Este controlador utiliza `@nestjs/common` y `express` para gestionar las solicitudes HTTP y `@nestjs/swagger` para configurar la documentación Swagger.

## Codigo Fuente

```typescript
import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiService } from './api.service';
import { LoginCentralDTO } from './api.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { HttpService } from '@nestjs/axios';

@Controller('apis')
export class ApiController {

	constructor(
		private readonly apiService: ApiService,
		private readonly httpService: HttpService
	) { }

	@ApiTags('login-auth')
	@Post('login-central')
	async loginCentral(@Req() req: Request, @Res() res: Response, @Body() loginCentralDTO: LoginCentralDTO) {
		try {
			const response = await this.apiService.loginAuthCentral(loginCentralDTO)
			res.send(response);
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}

```

## Dependencias

El archivo `api.controller.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
- `express`: Framework web para Node.js.
- `./api.service`: Servicio que contiene la lógica de la API.
- `./api.dto`: DTO (Data Transfer Object) utilizado en las solicitudes y respuestas de la API.
- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.
- `@nestjs/axios`: Módulo para realizar solicitudes HTTP utilizando Axios.

## Uso

El código en `api.controller.ts` sigue el siguiente flujo de ejecución:

1. Se importan las dependencias necesarias, incluyendo los decoradores `Body`, `Controller`, `Get`, `HttpStatus`, `Post`, `Req`, `Res` de `@nestjs/common`, y las interfaces `Request` y `Response` de `express`.
2. Se importa `ApiService` desde `./api.service` para utilizarlo en el controlador.
3. Se importa `LoginCentralDTO` desde `./api.dto` para definir el DTO utilizado en la solicitud `loginCentral`.
4. Se importan los decoradores `ApiBearerAuth`, `ApiResponse`, `ApiTags` desde `@nestjs/swagger` para configurar la documentación Swagger del controlador.
5. Se importa `HttpService` desde `@nestjs/axios` para realizar solicitudes HTTP utilizando Axios.

6. Se define la clase `ApiController` con el decorador `@Controller` y el path base `'apis'`.
7. En el constructor de `ApiController`, se inyectan las dependencias `ApiService` y `HttpService`.

8. Se agrega el decorador `@ApiTags('login-auth')` para etiquetar el controlador con 'login-auth' en la documentación Swagger.
9. Se define el método `loginCentral` con el decorador `@Post('login-central')` para manejar la ruta 'apis/login-central' con el método POST.
10. El método `loginCentral` recibe los parámetros `@Req()` para obtener la solicitud de `express`, `@Res()` para obtener la respuesta de `express`, y `@Body()` para obtener el cuerpo de la solicitud en forma de `loginCentralDTO`.

11. Dentro del método `loginCentral`, se utiliza `console.log()` para mostrar el `loginCentralDTO` en la consola.
12. Se llama al método `loginAuthCentral` del servicio `ApiService` pasando el `loginCentralDTO` y se espera la respuesta.
13. Se envía la respuesta utilizando `res.send(response)` para devolver la respuesta al cliente.