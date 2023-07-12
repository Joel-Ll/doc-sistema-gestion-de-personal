---
id: update-permission-dto-ts
title: update-permission.dto.ts
sidebar_label: update-permission.dto.ts
---

El archivo `update-permission.dto.ts` define la clase `UpdatePermissionDto`, que representa el DTO (Data Transfer Object) utilizado para actualizar un permiso. Esta clase utiliza el paquete `@nestjs/swagger` y hereda de `PartialType`(`CreatePermissionDto`) para generar la documentación Swagger y reutilizar los campos del DTO 

## Código Fuente
```typescript
import { PartialType } from '@nestjs/swagger';
import { CreatePermissionDto } from './create-permission.dto';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
```

## Dependencias
El archivo `update-permission.dto.ts` utiliza las siguientes dependencias:

- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.

## Uso
Por el momento esta archivo no tiene la funcionalidad correspondiente
