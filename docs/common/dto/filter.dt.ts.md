---
id: filter-dto-ts
title: filter.dto.ts
sidebar_label: filter.dto.ts
---

El archivo `filter.dto.ts` contiene la clase `FilterDto`, que define el DTO utilizado para filtrar datos. Esta clase utiliza el paquete `class-validator` para aplicar validaciones a los campos del DTO.

## Código Fuente
```typescript
import { IsOptional, IsString, MinLength } from "class-validator";

export class FilterDto {
	@IsOptional()
	@IsString()
	@MinLength(3)
	name?: string;

	@IsOptional()
	@IsString()
	@MinLength(3)
	nationality?: string;
}
```

## Dependencias
El archivo `filter.dto.ts` utiliza las siguientes dependencias:

- `class-validator`: Biblioteca utilizada para aplicar validaciones a las propiedades del DTO.

## Uso

El código en `filter.dto.ts` contiene lo siguiente:

1. Se importan los decoradores `IsOptional`, `IsString` y `MinLength` desde `class-validator` para aplicar validaciones a las propiedades del DTO.

2. Se define la clase `FilterDto`, que representa el DTO utilizado para filtrar datos. Esta clase tiene dos propiedades opcionales:

- `name`: Una cadena de texto que representa el nombre.
- `nationality`: Una cadena de texto que representa la nacionalidad.

3. Se utiliza el decorador `@IsOptional()` en ambas propiedades para indicar que son opcionales.

4. Se utiliza el decorador `@IsString()` en ambas propiedades para validar que sean cadenas de texto.

5. Se utiliza el decorador `@MinLength(3)` en ambas propiedades para especificar una longitud mínima de 3 caracteres para las cadenas de texto.

Con esta documentación, se describe el DTO `FilterDto` utilizado para filtrar datos, así como las validaciones aplicadas a sus propiedades utilizando el paquete `class-validator`.