---
id: create-permission-dto-ts
title: create-permission.dto.ts
sidebar_label: create-permission.dto.ts
---

El archivo `create-permission.dto.ts` define la clase `CreatePermissionDto`, que representa el DTO (Data Transfer Object) utilizado para crear un permiso. Esta clase utiliza el paquete `@nestjs/swagger` para configurar la documentación Swagger del campo.

## Código Fuente
```typescript
import { ApiProperty } from "@nestjs/swagger";

export class CreatePermissionDto {
	@ApiProperty()
	permissioName: string;
}
```

## Dependencias
El archivo `create-permission.dto.ts` utiliza las siguientes dependencias:

- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.

## Uso
Por el momento esta archivo no tiene la funcionalidad correspondiente
