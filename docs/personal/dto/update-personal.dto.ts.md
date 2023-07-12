---
id: update-personal-dto-ts
title: update-personal.dto.ts
sidebar_label: update-personal.dto.ts
---
El archivo `update-personal.dto.ts` define la clase `UpdatePersonalDto`, que representa el DTO (Data Transfer Object) utilizado para actualizar un registro de personal. Este DTO extiende el DTO `CreatePersonalDto` y utiliza el decorador `PartialType` de `@nestjs/swagger` para generar la documentación Swagger y permitir que solo se proporcionen los campos necesarios para la actualización.

## Código Fuente
```typescript
import { PartialType } from '@nestjs/swagger';
import { CreatePersonalDto } from './create-personal.dto';

export class UpdatePersonalDto extends PartialType(CreatePersonalDto) {}
```

## Dependencias
El archivo `update-personal.dto.ts` utiliza las siguientes dependencias:

- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.

## Uso
El código en `update-personal.dto.ts` contiene lo siguiente:

1. Se importa `PartialType` desde `@nestjs/swagger` para generar la documentación Swagger y permitir que solo se proporcionen los campos necesarios para la actualización.

2. Se importa `CreatePersonalDto` desde `./create-personal.dto` para utilizarlo como base para el DTO de actualización.

3. Se define la clase `UpdatePersonalDto`, que representa el DTO utilizado para actualizar un registro de personal.

4. Se utiliza extends `PartialType(CreatePersonalDto)` para extender el DTO `CreatePersonalDto` y heredar todas sus propiedades y validaciones.

Con esta documentación, se describe el DTO `UpdatePersonalDto` utilizado para actualizar un registro de personal. El DTO hereda todas las propiedades y validaciones del DTO CreatePersonalDto, permitiendo que solo se proporcionen los campos necesarios para la actualización. Además, se genera automáticamente la documentación Swagger para el DTO.

