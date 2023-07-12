---
id: parse-mongo-id-pipe-ts
title: parse-mongo-id.pipe.ts
sidebar_label: parse-mongo-id.pipe.ts
---

El archivo `parse-mongo-id.pipe.ts` contiene la clase `ParseMongoIdPipe`, que es una tubería personalizada utilizada en `NestJS` para validar y transformar valores en formato de ID de `MongoDB`. Esta tubería utiliza las dependencias `@nestjs/common` y `mongoose`.

## Código Fuente

```typescript
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} No es un MongoID válido`);
    }
    return value;
  }
}
```

## Dependencias
El archivo `parse-mongo-id.pipe.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de `NestJS` que proporciona las funcionalidades comunes.
- `mongoose`: Biblioteca de `MongoDB` para `Node.js` que proporciona funcionalidades de modelado de datos.

## Uso
El código en `parse-mongo-id.pipe.ts` contiene lo siguiente:

1. Se importan las dependencias `ArgumentMetadata`, `BadRequestException`, `Injectable` y `PipeTransform` desde `@nestjs/common`, y la función `isValidObjectId` desde `mongoose`.

2. Se define la clase `ParseMongoIdPipe`, que implementa la interfaz `PipeTransform`. Esta clase es una tubería personalizada utilizada para validar y transformar valores en formato de ID de `MongoDB`.

3. En el método `transform`, se recibe el valor y los metadatos como parámetros.

- Si el valor no es un ID de `MongoDB` válido (utilizando `isValidObjectId`), se lanza una excepción `BadRequestException` con un mensaje indicando que no es un MongoID válido.
- Si el valor es un ID de `MongoDB` válido, se devuelve sin realizar ninguna transformación.

Con esta documentación, se describe la tubería `ParseMongoIdPipe` utilizada para validar y transformar valores en formato de ID de `MongoDB` en `NestJS`. La tubería verifica si un valor es un `MongoID` válido y, en caso contrario, lanza una excepción.