---
id: personal-module-ts
title: personal.module.ts
sidebar_label: personal.module.ts
---

El archivo `personal.module.ts` define el módulo `PersonalModule` que encapsula los componentes relacionados con la entidad "Personal", como el controlador, el servicio y las configuraciones de conexión a la base de datos. El módulo utiliza `@nestjs/common` y `@nestjs/mongoose` para la integración de `NestJS` con `MongoDB`, y `@nestjs/axios` para la integración de solicitudes `HTTP` utilizando `Axios`.

## Código Fuente
```typescript
import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Personal, PersonalSchema } from './entities/personal.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Personal.name,
        schema: PersonalSchema
      }
    ]),
    HttpModule
  ]
})
export class PersonalModule {}
```

## Dependencias
El archivo `personal.module.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
- `@nestjs/mongoose`: Módulo para la integración de NestJS con MongoDB.
- `@nestjs/axios`: Módulo para la integración de solicitudes HTTP utilizando Axios.
- `personal.service`: Servicio que contiene la lógica relacionada con la entidad "Personal".
- `personal.controller`: Controlador que maneja las rutas relacionadas con la entidad "Personal".
- `Personal`: Clase de la entidad "Personal" definida en entities/personal.entity.
- `PersonalSchema`: Esquema de MongoDB definido para la entidad "Personal".
- `MongooseModule.forFeature`: Método para definir los módulos de MongoDB utilizados en el módulo.
- `HttpModule`: Módulo para realizar solicitudes HTTP utilizando Axios.

## Uso
El módulo `PersonalModule` encapsula el controlador `PersonalController` y el servicio `PersonalService`. Además, utiliza `MongooseModule.forFeature` para definir el esquema y la colección de MongoDB asociados con la entidad "Personal". También importa el módulo `HttpModule` para permitir la realización de solicitudes `HTTP` utilizando Axios en el servicio `PersonalService`.