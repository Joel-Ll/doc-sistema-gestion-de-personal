---
id: permissions-decorator-ts
title: permissions.decorator.ts
sidebar_label: permissions.decorator.ts
---
El archivo permissions.decorator.ts define el decorador Permissions, el cual se utiliza para asignar metadatos a los controladores o métodos en NestJS. Este decorador toma un número variable de argumentos, representando los permisos requeridos, y los asigna como metadatos bajo la clave 'permissions'.

## Código Fuente
```typescript
import { SetMetadata } from '@nestjs/common';
import { Permission } from '../constants/permission';

export const Permissions = (...permissions: Permission[]) => SetMetadata('permissions', permissions);

```

## Dependencias
El archivo `permissions.decorator.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS que proporciona los decoradores y funcionalidades comunes.
- `../constants/permission`: Archivo que exporta el enumerado `Permission` con los diferentes permisos de la aplicación.

## Uso
Este archivo por el momento no tiene ninguna funcionalidad en el proyecto, de acuerdo al avance se ira actualizando la documentacion.