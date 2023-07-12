---
id: create-personal-dto-ts
title: create-personal.dto.ts
sidebar_label: create-personal.dto.ts
---
El archivo `create-personal.dto.ts` define la clase `CreatePersonalDto`, que representa el DTO (Data Transfer Object) utilizado para crear un registro de personal. Este DTO utiliza el paquete `@nestjs/swagger` para generar la documentación Swagger y los decoradores de validación de datos `IsString`, `IsEmail`, `IsBoolean`, `MinLength`, `MaxLength` y `IsString` de `class-validator` para validar los campos del DTO.

## Código Fuente
```typescript
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonalDto {

	@ApiProperty()
	@IsString()
	@MinLength(1)
	name: string;

	@ApiProperty()
	@IsString()
	@MinLength(1)
	lastName: string;

	@ApiProperty()
	@IsString()
	@MinLength(1)
	ci: string;
	
	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	phone: string;

	@ApiProperty()
	@IsString()
	@MinLength(2)
	address: string;

	@ApiProperty()
	@IsString()
	@MinLength(2)
	nationality: string;

	@ApiProperty()
	unity: string;

	@ApiProperty()
	file?: string;

	@ApiProperty()
	@IsBoolean()
	isActive: boolean;
}
```

## Dependencias
El archivo `create-personal.dto.ts` utiliza las siguientes dependencias:

- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.
- `class-validator`: Biblioteca para validar los datos de forma declarativa.

## Uso
El código en `create-personal.dto.ts` contiene lo siguiente:

1. Se importa `ApiProperty` desde `@nestjs/swagger` para decorar las propiedades del DTO y generar la documentación Swagger.

2. Se importan los decoradores de validación de datos IsString, IsEmail, IsBoolean, MinLength, MaxLength y IsString desde class-validator para validar los campos del DTO.

3. Se define la clase `CreatePersonalDto`, que representa el DTO utilizado para crear un registro de personal.

4. Se utiliza `@ApiProperty()` para decorar cada propiedad del DTO y especificar su descripción en la documentación Swagger.

5. Se utiliza `@IsString()` para validar que las propiedades `name`, `lastName`, `ci`, `email`, `phone`, `address`, `nationality` y `unity` sean de tipo string.

6. Se utiliza `@IsEmail()` para validar que la propiedad email tenga un formato de dirección de correo electrónico válido.

7. Se utiliza `@IsBoolean()` para validar que la propiedad isActive sea de tipo boolean.

8. Se utiliza `@MinLength(1)` para validar que las propiedades `name`, `lastName`, `ci` tengan una longitud mínima de 1 carácter.

9. Se utiliza `@MinLength(2)` para validar que las propiedades `address` y `nationality` tengan una longitud mínima de 2 caracteres.

10. La propiedad file es opcional y se especifica utilizando el operador ?.


Con esta documentación, se describe el DTO `CreatePersonalDto` utilizado para crear un registro de personal. Cada propiedad del DTO está decorada con los decoradores de validación correspondientes, lo que permite validar los datos antes de su procesamiento. Además, se genera automáticamente la documentación Swagger para el DTO.
