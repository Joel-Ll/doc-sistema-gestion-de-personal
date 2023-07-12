---
id: permission-model-ts
title: permission.model.ts
sidebar_label: permission.model.ts
---

El archivo `permission.model.ts` define el esquema y el modelo de datos para la entidad "`Permission`" en una base de datos MongoDB utilizando Mongoose.

## Código Fuente
```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema()
export class Permission {
	@Prop({ required: true })
	permissionName: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
```

## Dependencias
El archivo `permission.model.t+s` utiliza las siguientes dependencias:

- `@nestjs/mongoose`: Módulo de integración de NestJS con Mongoose, una biblioteca de modelado de objetos de MongoDB.
- `mongoose`: Biblioteca para trabajar con MongoDB en Node.js.

## Uso
El código en `permission.model.ts` contiene lo siguiente:

1. Se importan los decoradores `Prop`, `Schema` y `SchemaFactory` desde `@nestjs/mongoose`.

2. Se importa `HydratedDocument` desde mongoose para definir el tipo `PermissionDocument`.

3. Se define la interfaz `PermissionDocument` como un tipo de documento Mongoose que representa un documento de la entidad "Permission".

4. Se define la clase `Permission` con el decorador `@Schema()` para indicar que esta clase es un esquema Mongoose.

5. Dentro de la clase `Permission`, se define una propiedad `permissionName` utilizando el decorador `@Prop({ required: true })`, que indica que este campo es requerido en el esquema.

6. Se utiliza `SchemaFactory.createForClass(Permission)` para crear el esquema Mongoose a partir de la clase Permission.

## Schema Permission

| Nombre         | Tipo           | Requerido | Descripción                                               |
| -------------- | -------------- | --------- | --------------------------------------------------------- |
| permissionName       | string         | Sí        | Nombre de un permiso |
---

Este schema representa la estructura que debe tener un permiso en la base de datos. Contiene las siguientes propiedades:

- `permissionName`: Nombre del permiso.

Con esta documentación, se describe el esquema y el modelo de datos para la entidad "Permission" en una base de datos MongoDB utilizando Mongoose. El esquema define la estructura y las propiedades de la entidad, mientras que el modelo se utiliza para interactuar con la base de datos y realizar operaciones CRUD. 

Estos permisos creados tendran una funcionalidad de que se pueda asignar a cada peresonal los permisos correspondientes.








