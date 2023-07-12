---
id: permission-module-ts
title: permission.module.ts
sidebar_label: permission.module.ts
---
El archivo `permission.module.ts` define el módulo `PermissionModule` en NestJS, que se encarga de organizar y configurar los componentes relacionados con la entidad "Permission". Este módulo utiliza los decoradores `Module`, `imports`, `controllers` y `providers` de `@nestjs/common` para definir la configuración del módulo y se comunica con el servicio `PermissionService` y el controlador `PermissionController`. Además, utiliza `MongooseModule` de `@nestjs/mongoose` para importar el esquema `PermissionSchema` y relacionarlo con el modelo Permission.

## Código Fuente
```typescript
import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionSchema } from './entities/permission.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Permission.name,
        schema: PermissionSchema,
      },
    ]),
  ],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
```

## Dependencias
El archivo `permission.module.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
- `./permission.service`: Servicio que contiene la lógica de negocio relacionada con la entidad "Permission".
- `./permission.controller`: Controlador que maneja las rutas relacionadas con la entidad "Permission".
- `@nestjs/mongoose`: Módulo de integración de NestJS con Mongoose, una biblioteca de modelado de objetos de MongoDB.
- `./entities/permission.entity`: Esquema y modelo de datos para la entidad "Permission".

## Uso
El código en `permission.module.ts` contiene lo siguiente:

1. Se importa el decorador `Module` desde `@nestjs/common` para definir el módulo `PermissionModule`.

2. Se importa `PermissionService` desde `./permission.service` para utilizarlo como proveedor en el módulo.

3. Se importa `PermissionController` desde `./permission.controller` para utilizarlo como controlador en el módulo.

4. Se importa `MongooseModule` desde `@nestjs/mongoose` para utilizarlo como importador de esquemas de Mongoose.

5. Se importa `Permission` y `PermissionSchema` desde `./entities/permission`.entity para asociar el modelo Permission con el esquema `PermissionSchema`.

6. En el cuerpo del módulo, se utiliza el decorador @Module para definir la configuración del módulo.

- En la sección imports, se utiliza `MongooseModule.forFeature()` para importar el esquema `PermissionSchema` y relacionarlo con el modelo `Permission`. Esto permite que el modelo `Permission` se utilice en otros componentes del módulo, como el controlador y el servicio.
- En la sección `controllers`, se especifica el controlador `PermissionController` como controlador asociado al módulo.
- En la sección `providers`, se especifica el servicio `PermissionService` como proveedor asociado al módulo.


Con esta documentación, se describe el módulo `PermissionModule` en NestJS, que se encarga de organizar y configurar los componentes relacionados con la entidad "Permission". El módulo importa el esquema `PermissionSchema` y lo asocia con el modelo Permission, y proporciona el controlador `PermissionController` y el servicio `PermissionService` para manejar las operaciones relacionadas con la entidad.
