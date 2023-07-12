---
id: permission-controller-ts
title: permission.controller.ts
sidebar_label: permission.controller.ts
---

El archivo `permission.controller.ts` define el controlador `PermissionController`, que maneja las rutas relacionadas con la entidad "Permission" en la API. Este controlador utiliza los decoradores Controller, `Get`, `Post`, `Body`, `Patch`, `Param` y `Delete` de `@nestjs/common` para gestionar las solicitudes HTTP y se comunica con el servicio `PermissionService`. Además, utiliza los DTO (Data Transfer Objects) `CreatePermissionDto` y `UpdatePermissionDto` para validar y transferir datos.

## Código Fuente
```typescript
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionService.remove(+id);
  }
}
```

## Dependencias
El archivo `permission.controller.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
  
- `./permission.service`: Servicio que contiene la lógica de negocio relacionada con la entidad "Permission".
- `./dto/create-permission.dto`: DTO utilizado para crear un permiso.
- `./dto/update-permission.dto`: DTO utilizado para actualizar un permiso.

## Uso
El código en `permission.controller.ts` contiene lo siguiente:

1. Se importan los decoradores `Controller`, `Get`, `Post`, `Body`, `Patch`, `Param` y `Delete` desde `@nestjs/common` para definir el controlador y los métodos de enrutamiento.

2. Se importa `PermissionService` desde `./permission.service` para utilizarlo en el controlador.

3. Se importan los DTO `CreatePermissionDto` y `UpdatePermissionDto` desde los archivos correspondientes para validar y transferir datos.

4. Se define la clase `PermissionController` con el decorador `@Controller`('permission'), que establece la ruta base '`/permission`' para todas las rutas del controlador.

5. En el constructor de `PermissionController`, se inyecta el servicio `PermissionService`.

6. Se define el método `create` con el decorador `@Post()`, que maneja la ruta POST '`/permission`' y recibe el cuerpo de la solicitud como `createPermissionDto`. Llama al método `create` del servicio `PermissionService` pasando el DTO y devuelve el resultado.

7. Se define el método `findAll` con el decorador `@Get()`, que maneja la ruta GET '/permission' y devuelve todos los permisos utilizando el método `findAll` del servicio `PermissionService`.

8. Se define el método `findOne` con el decorador `@Get(':id')`, que maneja la ruta GET '/permission/:id' y recibe el parámetro `id`. Llama al método `findOne` del servicio `PermissionService` pasando el `id` convertido a número y devuelve el resultado.

9. Se define el método `update` con el decorador `@Patch(':id')`, que maneja la ruta PATCH '/permission/:id' y recibe el parámetro `id` y el cuerpo de la solicitud como `updatePermissionDto`. Llama al método update del servicio `PermissionService` pasando el id convertido a número y el DTO de actualización, y devuelve el resultado.

10. Se define el método `remove` con el decorador `@Delete(':id')`, que maneja la ruta DELETE '/permission/:id' y recibe el parámetro `id`. Llama al método remove del servicio `PermissionService` pasando el id convertido a número y devuelve el resultado.

Con esta documentación, se describe el controlador PermissionController que maneja las rutas relacionadas con la entidad "Permission" en la API. Los métodos del controlador definen las operaciones CRUD para la entidad y se comunican con el servicio PermissionService para realizar las operaciones correspondientes en la base de datos.

