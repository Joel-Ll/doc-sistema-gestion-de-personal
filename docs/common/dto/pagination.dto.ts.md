---
id: pagination-dto-ts
title: pagination.dto.ts
sidebar_label: pagination.dto.ts
---

El archivo `pagination.dto.ts` contiene la clase `PaginationDto`, que define el DTO utilizado para la paginación de resultados. Esta clase utiliza el paquete `class-validator` para aplicar validaciones a los campos del DTO.

## Código Fuente
```typescript
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
	@IsOptional()
	@IsPositive()
	@IsNumber()
	@Min(1)
	limit?: number;

	@IsOptional()
	@IsNumber()
	@IsPositive()
	offset?: number;
}
```

## Dependencias
El archivo `pagination.dto.ts` utiliza las siguientes dependencias:

- `class-validator`: Biblioteca utilizada para aplicar validaciones a las propiedades del DTO.

## Uso

El código en `pagination.dto.ts` contiene lo siguiente:

1. Se importan los decoradores `IsNumber`, `IsOptional`, `IsPositive` y `Min` desde `class-validator` para aplicar validaciones a las propiedades del DTO.

2. Se define la clase `PaginationDto`, que representa el DTO utilizado para la paginación de resultados. Esta clase tiene dos propiedades opcionales:

- `limit`: Un número que representa el límite de resultados por página.
- `offset`: Un número que representa el desplazamiento de resultados.

3. Se utiliza el decorador `@IsOptional()` en ambas propiedades para indicar que son opcionales.

4. Se utiliza el decorador `@IsPositive()` en ambas propiedades para validar que sean números positivos.

5. Se utiliza el decorador `@IsNumber()` en ambas propiedades para validar que sean números.

6. Se utiliza el decorador `@Min(1)` en la propiedad `limit` para especificar un valor mínimo de 1.

Con esta documentación, se describe el DTO `PaginationDto` utilizado para la paginación de resultados, así como las validaciones aplicadas a sus propiedades utilizando el paquete `class-validator`.
