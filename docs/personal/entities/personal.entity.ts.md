---
id: personal-entity-ts
title: personal.entity.ts
sidebar_label: personal.entity.ts
---
El archivo `personal.entity.ts` define la entidad Personal, que representa el modelo de datos para un registro de personal en la base de datos. Este archivo utiliza los decoradores `Prop` y `Schema` de `@nestjs/mongoose` para definir los campos del modelo y generar el esquema correspondiente. Además, extiende la clase Document de mongoose para proporcionar soporte para la interfaz de documento de Mongoose.

## Código Fuente
```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Personal extends Document {
	@Prop({
		unique: false
	})
	name: string;

	@Prop({
		unique: false
	})
	lastName: string;

	@Prop({
		unique: true
	})
	ci: string;

	@Prop({
		unique: true
	})
	email: string;

	@Prop({
		unique: true
	})
	phone: string;

	@Prop({
		unique: false
	})
	address: string;

	@Prop({
		unique: false
	})
	nationality: string;

	@Prop({
		default: null
	})
	unity: string;

	@Prop({
		default: null
	})
	file?: string;

	@Prop({
		default: true
	})
	isActive: boolean;
}

export const PersonalSchema = SchemaFactory.createForClass(Personal);
```

## Dependencias
El archivo `personal.entity.ts` utiliza las siguientes dependencias:

- `@nestjs/mongoose`: Módulo de integración de NestJS con Mongoose, una biblioteca de modelado de objetos de MongoDB.
- `mongoose`: Biblioteca para trabajar con MongoDB en Node.js.

## Uso
El código en `personal.entity.ts` contiene lo siguiente:

1. Se importa `Prop` y `Schema` desde `@nestjs/mongoose` para decorar los campos del modelo y generar el esquema correspondiente.

2. Se importa `Document` desde mongoose para proporcionar soporte para la interfaz de documento de Mongoose.

3. Se define la clase `Personal`, que representa el modelo de datos para un registro de personal.

- La clase extiende la clase `Document` de `mongoose`, lo que proporciona soporte para la interfaz de documento de Mongoose.
  
- Cada propiedad del modelo está decorada con el decorador `@Prop` para especificar sus opciones, como la unicidad y los valores predeterminados.
4. Se utiliza el decorador `@Schema()` para generar el esquema correspondiente al modelo Personal.

5. Se utiliza export const `PersonalSchema = SchemaFactory.createForClass(Personal)` para generar el esquema del modelo `Personal` utilizando `SchemaFactory` de `@nestjs/mongoose`.

Con esta documentación, se describe la entidad `Personal` que representa el modelo de datos para un registro de personal en la base de datos. El modelo contiene varias propiedades decoradas con `@Prop`, lo que permite definir las opciones de cada campo, como la unicidad y los valores predeterminados. Además, se genera automáticamente el esquema correspondiente utilizando `SchemaFactory`.

## Schema Personal

| Nombre         | Tipo           | Unico     |  Requerido        | Descripción                                          |
| -------------- | -------------- | ----------|-------------------|----------------------------------------------------- |
| name           | string         | false     |  -                |Nombre del Personal                                   |
| lastName       | string         | false     |  -                |Apellido del Personal                                 |
| ci             | string         | true      |  -                |CI del archivo                                        |
| email          | string         | true      |  -                |Email del Personal                                    |
| phone          | string         | true      |  -                |Nro de Telefono del Personal                          |
| address        | string         | false     |  -                |Direccion del Personal                                |
| nationality    | string         | false     |  -                |Nacionalidad del Personal                             |
| unity          | string         | false     |  default( true )  |Unidad al que pertenece el personal                   |
| file           | string         | -         |  default( null )  |Foto del Personal                                     | 
| isActive       | boolean        | -         |  default( true )  |Estado del Personal ( Activo - Inactivo )             |

Este schema representa la estructura que debe tener un permiso en la base de datos. Contiene las siguientes propiedades:




