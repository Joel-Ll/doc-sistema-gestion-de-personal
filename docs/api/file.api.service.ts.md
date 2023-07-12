---
id: api-service-ts
title: api.service.ts
sidebar_label: api.service.ts
---

El archivo `api.service.ts` define el servicio `ApiService`, el cual contiene la lógica de la API. Este servicio utiliza `@nestjs/axios` y `@nestjs/common` para realizar solicitudes HTTP y la inyección de dependencias, respectivamente.

## Código Fuente
```typescript
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { LoginCentralDTO } from './api.dto';

@Injectable()
export class ApiService {
	private apiSeguridad = process.env.API_SEGURIDAD;

	constructor(
		private readonly httpService: HttpService,
	) {}

	async test() {
		return 'Hello from services'
	}

	async loginAuthCentral(loginCentralDTO: LoginCentralDTO) {
		try {
			const response = await this.httpService.post(`${this.apiSeguridad}/auth/verify-app-token`, loginCentralDTO).toPromise()
			return response.data	
		} catch (error) { 
			throw error.response?.data
		}
	}
}
```

## Dependencias

El archivo api.service.ts utiliza las siguientes dependencias:
- `@nestjs/axios`: Módulo para realizar solicitudes HTTP utilizando Axios.
- `@nestjs/common`: Módulo principal de NestJS para la inyección de dependencias y otros decoradores.
- `./api.dto`: DTO (Data Transfer Object) utilizado en las solicitudes de autenticación central.

## Uso

El código en `api.service.ts` contiene lo siguiente:

1. Se importa la dependencia `HttpService` desde `@nestjs/axios` para realizar solicitudes HTTP utilizando Axios.
2. Se importa el decorador `Injectable` desde `@nestjs/common` para marcar la clase `ApiService` como un servicio inyectable.
3. Se importa `LoginCentralDTO` desde `./api.dto` para utilizarlo como tipo de datos en el método `loginAuthCentral`.
4. Se define la clase `ApiService` con el decorador `@Injectable`.
5. Se declara una variable privada `apiSeguridad` que almacena la URL de la API de seguridad obtenida desde la variable de entorno `API_SEGURIDAD`.

6. En el constructor de `ApiService`, se inyecta la dependencia `HttpService` para realizar solicitudes HTTP.
7. Se define el método `test`, que devuelve el string `'Hello from services'`
8. Se define el método `loginAuthCentral`, que recibe un objeto `loginCentralDTO` como parámetro. Este método realiza una solicitud POST utilizando `httpService` para enviar los datos de `loginCentralDTO` a la URL `${this.apiSeguridad}/auth/verify-app-token`. Se espera una respuesta y se devuelve el cuerpo de la respuesta (`response.data`).
9. Si se produce un error durante la solicitud, se captura y se lanza el mensaje de error contenido en la respuesta (`error.response?.data`).


