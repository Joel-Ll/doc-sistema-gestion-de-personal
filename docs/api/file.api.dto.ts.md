---
id: api-dto-ts
title: api.dto.ts
sidebar_label: api.dto.ts
---

El archivo `api.dto.ts` define dos clases DTO (Data Transfer Object) utilizadas en la API, `loginAuthDTO` y `LoginCentralDTO`. Estas clases utilizan `@nestjs/swagger` para decorar las propiedades y generar la documentación Swagger.

## Código Fuente
```typescript
import { ApiProperty } from "@nestjs/swagger";

export class loginAuthDTO {
	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;
}

export class LoginCentralDTO {
	@ApiProperty()
	app: string;

	@ApiProperty()
	token: string;
}
```

## Dependencias
El archivo api.dto.ts utiliza las siguientes dependencias:

- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.
  
## Uso
El código en `api.dto.ts` contiene lo siguiente:

1. Se importa el decorador `ApiProperty` desde `@nestjs/swagger` para decorar las propiedades de las clases DTO y generar la documentación Swagger.

2. Se define la clase `loginAuthDTO`, que representa el DTO utilizado en la autenticación. Contiene las siguientes propiedades:

- `email`: de tipo string y decorada con `@ApiProperty()`.
- `password`: de tipo string y decorada con `@ApiProperty()`.
3. Se define la clase `LoginCentralDTO`, que representa el DTO utilizado en la autenticación central. Contiene las siguientes propiedades:

- `app`: de tipo string y decorada con `@ApiProperty()`.
- `token`: de tipo string y decorada con `@ApiProperty()`.

Estas clases DTO se utilizan para definir la estructura de los datos enviados o recibidos en las solicitudes de la API y se utilizan junto con `@nestjs/swagger` para generar la documentación Swagger correspondiente.