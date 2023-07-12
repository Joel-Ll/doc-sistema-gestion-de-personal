---
id: permission-service-ts
title: permission.service.ts
sidebar_label: permission.service.ts
---
El archivo `permission.service.ts` define el servicio `PermissionService`, que contiene la lógica de negocio relacionada con la entidad "Permission". Este servicio utiliza los decoradores `Injectable` y `InjectModel` de `@nestjs/common` y `@nestjs/mongoose`, respectivamente. Además, utiliza los DTO `CreatePermissionDto` y `UpdatePermissionDto` para validar los datos y se comunica con el modelo Permission a través del modelo `PermissionDocument` utilizando el paquete mongoose.

## Código Fuente
```typescript
import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Permission, PermissionDocument } from './entities/permission.entity';
import { Model } from 'mongoose';

@Injectable()
export class PermissionService {

  constructor(
    @InjectModel(Permission.name) private readonly permissionModel: Model<PermissionDocument>,
  ) {}
  
  async setPermissionDefault() {
    const count = await this.permissionModel.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      this.permissionModel.create({ permissionName: 'CREAR_PERSONAL_PERS' }),
      this.permissionModel.create({ permissionName: 'EDITAR_PERSONAL_PERS' }),
      this.permissionModel.create({ permissionName: 'ELIMINAR_PERSONAL_PERS' }),
      this.permissionModel.create({ permissionName: 'RESTABLECER_PERSONAL_PERS' }),
      this.permissionModel.create({ permissionName: 'CREAR_PERMISO_PERS' }),
      this.permissionModel.create({ permissionName: 'EDITAR_PERMISO_PERS' }),
      this.permissionModel.create({ permissionName: 'ELIMINAR_PERMISO_PERS' }),
    ]);
    return values;
  }

  async create(createPermissionDto: CreatePermissionDto) {
    // Lógica para crear un permiso
    return `This action creates a new permission with the name "${createPermissionDto.permissionName}"`;
  }

  findAll() {
    // Lógica para obtener todos los permisos
    return `This action returns all permissions`;
  }

  findOne(id: number) {
    // Lógica para obtener un permiso por su id
    return `This action returns permission with id #${id}`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    // Lógica para actualizar un permiso por su id
    return `This action updates permission with id #${id} with the data: ${JSON.stringify(updatePermissionDto)}`;
  }

  remove(id: number) {
    // Lógica para eliminar un permiso por su id
    return `This action removes permission with id #${id}`;
  }
}
```

## Dependencias
El archivo `permission.service.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
- `@nestjs/mongoose`: Módulo de integración de NestJS con Mongoose, una biblioteca de modelado de objetos de MongoDB.
- `./dto/create-permission.dto`: DTO utilizado para crear un permiso.
- `./dto/update-permission.dto`: DTO utilizado para actualizar un permiso.
- `@nestjs/mongoose`: Módulo de integración de NestJS con Mongoose, una biblioteca de modelado de objetos de MongoDB.
- `mongoose`: Biblioteca para trabajar con MongoDB en Node.js.

## Uso
El código en `permission.service.ts` contiene lo siguiente:

1. Se importa el decorador `Injectable` desde `@nestjs/common` para marcar la clase `PermissionService` como un servicio inyectable en NestJS.

2. Se importa `CreatePermissionDto` desde `./dto/create-permission.dto` para utilizarlo como tipo de datos en los métodos del servicio.

3. Se importa `UpdatePermissionDto` desde `./dto/update-permission.dto` para utilizarlo como tipo de datos en los métodos del servicio.

4. Se importa `InjectModel` desde `@nestjs/mongoose` para inyectar el modelo `Permission` en el servicio.

5. Se importa `Permission` y `PermissionDocument` desde `./entities/permission.entity` para utilizarlos como tipos de datos relacionados con el modelo `Permission`.

6. Se importa `Model` desde `mongoose` para utilizarlo como tipo de datos para el modelo `PermissionDocument`.

7. Se define la clase `PermissionService` con el decorador `@Injectable()`, lo que permite que el servicio sea inyectado en otros componentes de NestJS.

8. En el constructor del servicio, se utiliza el decorador `@InjectModel(Permission.name)` para inyectar el modelo `Permission` utilizando su nombre en el servicio y se guarda en la propiedad `permissionModel` del servicio.

9. Se define el método `setPermissionDefault`, que verifica si hay documentos en la colección de permisos y, si no hay ninguno, crea los permisos por defecto utilizando el método


