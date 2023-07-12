---
id: personal-controller-ts
title: personal.controller.ts
sidebar_label: personal.controller.ts
---

El archivo `personal.controller.ts` define el controlador `PersonalController` que maneja las rutas relacionadas con los registros de personal. Este controlador utiliza `@nestjs/common` y `express` para gestionar las solicitudes `HTTP`, `@nestjs/swagger` para configurar la documentación `Swagger`, `@nestjs/axios` para realizar solicitudes `HTTP` utilizando `Axios`, y depende del servicio `PersonalService` para realizar operaciones relacionadas con los registros de personal.

## Código Fuente
```typescript
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put, Query, ParseIntPipe, Res } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { FilterDto } from 'src/common/dto/filter.dto';
import { HttpService } from '@nestjs/axios';
import {Response, response} from 'express';

@Controller('personal')
export class PersonalController {
  constructor(
    private readonly personalService: PersonalService,
    private httpService: HttpService
  ) {}

  @ApiTags('personal')
  @ApiOperation({ summary: 'Registro de personal', description: 'Registra un personal con todos sus parámetros' })
  @Post()
  async create(@Body() createPersonalDto: CreatePersonalDto, @Res() response: Response) {
    const { file, unity } = createPersonalDto;

    if (file) {
      const mime = file.split(';')[0].split(':')[1];
      const base64 = file.split(',')[1];
      const fileObj = { mime, base64 };

      try {
        const res = await this.httpService.post(`${process.env.API_FILE}/files/upload`, { file: fileObj }).toPromise();
        createPersonalDto = { ...createPersonalDto, file: res.data.file._id };
      } catch (error) {
        throw error.response?.data;
      }
    }

    if (unity) {
      try {
        const res = await this.httpService.get(`${process.env.API_UNITYS}/main/${unity}`).toPromise();
      } catch (error) {
        throw error.response?.data;
      }
    }

    const createPersonal = await this.personalService.create(createPersonalDto);
    response.status(200).send(createPersonal);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Obtener Registros de Personal', description: 'Obtiene todos los registros del personal' })
  @Get()
  async findAll() {
    return await this.personalService.findAll();
  }

  @ApiTags('personal')
  @Get('activos')
  async findAllActive() {
    const personals = await this.personalService.find({ isActive: true });

    for (const personal of personals) {
      if (personal.file) {
        try {
          const res = await this.httpService.get(`${process.env.API_FILE}/file/${personal.file}`).toPromise();
          personal.file = res.data.file.base64;
        } catch (error) {
          throw error.response?.data;
        }
      }
    }
    return personals;
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Obtener Registros por paginación', description: 'Obtiene los registros del personal por paginación' })
  @ApiQuery({ name: 'limit', type: Number, example: 10, required: false })
  @ApiQuery({ name: 'offset', type: Number, example: 0, required: false })
  @Get('paginacion')
  async findAllPaginate(@Query() paginationDto: PaginationDto) {
    return await this.personalService.findAllPaginate(paginationDto);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Obtener registros por filtrado de parámetros', description: 'Realiza la búsqueda de registros por el filtrado' })
  @ApiQuery({ name: 'name', type: String, example: 'Joel', required: false })
  @ApiQuery({ name: 'nationality', type: String, example: 'Boliviano', required: false })
  @Get('filtrado')
  async filterParams(@Query() filterDto: FilterDto) {
    return await this.personalService.filterParams(filterDto);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Obtener Registro por ID', description: 'Obtiene un registro específico por su ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personalService.findOne(id);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Editar Registro por ID', description: 'Edita un registro específico por su ID' })
  @Put('edit/:id')
  async update(@Param('id', ParseMongoIdPipe) id: string, @Body() updatePersonalDto: CreatePersonalDto) {
    return await this.personalService.update(id, updatePersonalDto);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Dar de baja un registro por ID', description: 'Da de baja un registro por su ID' })
  @Delete(':id')
  async unsubscribe(@Param('id', ParseMongoIdPipe) id: string) {
    return await this.personalService.unsubscribe(id);
  }

  @ApiTags('personal')
  @ApiOperation({ summary: 'Activar un registro por ID', description: 'Activa un registro por su ID' })
  @Put(':id')
  async activeRegister(@Param('id', ParseMongoIdPipe) id: string) {
    return await this.personalService.activeRegister(id);
  }
}
```

## Dependencias
El archivo `personal.controller.ts` utiliza las siguientes dependencias:

- `@nestjs/common`: Módulo principal de NestJS para decoradores y funcionalidades comunes.
- `express`: Framework web para Node.js.
- `@nestjs/swagger`: Biblioteca para generar la documentación Swagger.
- `personal.service`: Servicio que contiene la lógica del controlador.
- `create-personal.dto`: DTO utilizado en las solicitudes de creación de personal.
- `ParseMongoIdPipe`: Pipe personalizado utilizado para validar y transformar los IDs de MongoDB.
- `pagination.dto`: DTO utilizado para la paginación de resultados.
- `filter.dto`: DTO utilizado para el filtrado de resultados.
- `HttpService`: Servicio para realizar solicitudes HTTP utilizando Axios.
- `Response` y `response` de express: Interfaces para trabajar con respuestas HTTP.



## Uso
El código en `personal.controller.ts` sigue el siguiente flujo de ejecución:

1. En la ruta `/personal` con el método `POST`, se registra un nuevo personal utilizando el DTO `createPersonalDto`. Se realiza una serie de validaciones y procesamiento de datos antes de llamar al método `create` del servicio `personalService` para crear el registro. Si se proporciona un archivo (file) en `createPersonalDto`, se realiza una solicitud HTTP para cargar el archivo a un servicio externo y se actualiza el DTO con el ID del archivo cargado. Si se proporciona una unidad `(unity)`, se realiza una solicitud HTTP para obtener información adicional sobre la unidad. Finalmente, se envía la respuesta HTTP con el resultado del registro creado.

2. En la ruta `/personal` con el método `GET`, se obtienen todos los registros de personal utilizando el método `findAll` del servicio `personalService`. Se devuelve el resultado de la consulta.

3. En la ruta `/personal/activos` con el método `GET`, se obtienen todos los registros de personal que están marcados como activos `(isActive: true)`. Se realiza una solicitud `HTTP` para obtener el archivo asociado a cada registro y se actualiza el campo file con los datos del archivo. Finalmente, se devuelve el resultado de la consulta.

4. En la ruta `/personal/paginacion` con el método `GET`, se obtienen los registros de personal utilizando el DTO `paginationDto` para la paginación. Se realiza una consulta utilizando el método `findAllPaginate` del servicio `personalService`. Se devuelve el resultado de la consulta.

5. En la ruta `/personal/filtrado` con el método GET, se obtienen los registros de personal que coinciden con los parámetros de filtrado especificados en el DTO `filterDto`. Se realiza una consulta utilizando el método `filterParams` del servicio `personalService`. Se devuelve el resultado de la consulta.

6. En la ruta `/personal/:id` con el método `GET`, se obtiene un registro de personal específico utilizando el `ID` proporcionado en el parámetro id. Se realiza una consulta utilizando el método `findOne` del servicio `personalService`. Se devuelve el resultado de la consulta.

7. En la ruta `/personal/edit/:id` con el método `PUT`, se actualiza un registro de personal específico utilizando el ID proporcionado en el parámetro id y el DTO `updatePersonalDto` para los datos actualizados. Se realiza una validación y transformación del `ID` utilizando el `ParseMongoIdPipe`. Luego se llama al método update del servicio `personalService` para actualizar el registro. Se devuelve el resultado de la actualización.

8. En la ruta `/personal/:id` con el método `DELETE`, se da de baja un registro de personal específico utilizando el `ID` proporcionado en el parámetro id. Se realiza una validación y transformación del ID utilizando el `ParseMongoIdPipe`. Luego se llama al método `unsubscribe` del servicio `personalService` para dar de baja el registro. Se devuelve el resultado de la operación.

9. En la ruta `/personal/:id` con el método PUT, se activa un registro de personal específico utilizando el `ID` proporcionado en el parámetro id. Se realiza una validación y transformación del ID utilizando el `ParseMongoIdPipe`. Luego se llama al método `activeRegister` del servicio `personalService` para activar el registro. Se devuelve el resultado de la operación.

Este controlador utiliza los decoradores `ApiTags` y `ApiOperation` de `@nestjs/swagger` para etiquetar y documentar las rutas y operaciones del controlador. También utiliza el decorador `ApiQuery` para documentar los parámetros de consulta utilizados en algunas rutas. El controlador depende del servicio `personalService` para realizar las operaciones lógicas relacionadas con los registros de personal. Además, utiliza el servicio `HttpService` para realizar solicitudes HTTP a servicios externos.




