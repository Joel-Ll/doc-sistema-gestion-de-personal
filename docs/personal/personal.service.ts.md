---
id: personal-service-ts
title: personal.service.ts
sidebar_label: personal.service.ts
---

El archivo `personal.service.ts` contiene la clase `PersonalService` que proporciona la lógica de negocio para la gestión de la entidad "Personal". Este servicio utiliza `@nestjs/common`, `@nestjs/mongoose`, y `@nestjs/axios` para la inyección de dependencias, la integración con la base de datos MongoDB y la realización de solicitudes HTTP utilizando Axios.

## Código Fuente
```typescript
import { BadRequestException, HttpException, HttpServer, Injectable, InternalServerErrorException, NotFoundException, UploadedFile } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { FilterQuery, Model } from 'mongoose';
import { Personal } from './entities/personal.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { FilterDto } from 'src/common/dto/filter.dto';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class PersonalService {
  private defaultLimit: number;

  private getEntityName(entities: any[], entityId: string): string {
    for (const entity of entities) {
      if (entity._id === entityId) {
        return entity.name;
      } else if (entity.children && entity.children.length > 0) {
        const childEntityName = this.getEntityName(entity.children, entityId);
        if (childEntityName) {
          return childEntityName;
        }
      }
    }
    return null;
  }

  constructor(
    @InjectModel(Personal.name)
    private readonly personalModel: Model<Personal>,
    private httpService: HttpService,
  ) { }

  async create(createPersonalDto: CreatePersonalDto) {

    try {
      const personal = await this.personalModel.create(createPersonalDto);
      return personal;
    } catch (error) {

      if (error.code === 11000) {
        throw new BadRequestException(`El personal ya existe en la base de datos ${JSON.stringify(error.keyValue)}`);
      }
      throw new InternalServerErrorException(`No se puede crear un personal - Revise los logs del servidor`);
    }
  }

  async findAll() {
    const personals = await this.personalModel.find({});
    const count = await this.personalModel.estimatedDocumentCount();
    const entities = await axios.get(`${process.env.API_UNITYS}/main`);

    if (count === 0) {
      return personals;
    }

    for (const personal of personals) {
      if (personal.file) {
        try {
          const res = await this.httpService.get(`${process.env.API_FILE}/file/${personal.file}`).toPromise();
          personal.file = res.data.file.base64;

        } catch (error) {
          throw error.response?.data;
        }
      }

      const entityName = this.getEntityName(entities.data, personal.unity);
      personal.unity = entityName;
    }

    return personals;
  }

  async find(filter: FilterQuery<Personal>): Promise<Personal[]> {
    return this.personalModel.find(filter).exec();
  }

  async findAllPaginate(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;

    const personals = await this.personalModel.find()
      .limit(limit)
      .skip(offset)
      .select('-__v');

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

  async filterParams(filterDto: FilterDto) {
    const { name, nationality } = filterDto;

    let query = this.personalModel.find();

    if (nationality) {
      query = query.where('nationality').equals(nationality);
    }

    if (name) {
      query = query.where('name').equals(name);
    }

    const result = await query.exec();

    for (const personal of result) {
      if (personal.file) {
        try {
          const res = await this.httpService.get(`${process.env.API_FILE}/file/${personal.file}`).toPromise();
          personal.file = res.data.file.base64;
        } catch (error) {
          throw error.response?.data;
        }
      }
    }

    return result;
  }

  async findOne(id: string) {
    const personal = await this.personalModel.findById(id);

    if (!personal) {
      throw new HttpException('El personal no existe', 404);
    }

    if (personal.file) {
      try {
        const res = await this.httpService.get(`${process.env.API_FILE}/file/${personal.file}`).toPromise();
        const base64 = res.data?.file?.base64;

        if (base64) {
          personal.file = res.data.file.base64;
        } else {
          console.log('imagen no disponible');
        }
      } catch (error) {
        throw error.response?.data;
      }
    }

    return personal;
  }

  async update(id: string, updatePersonalDto: UpdatePersonalDto) {
    const personalId = await this.personalModel.findById(id);

    if (!personalId) {
      throw new HttpException('Personal no encontrado', 404);
    }

    const { file } = updatePersonalDto;

    if (file && file.startsWith('data')) {
      const mime = file.split(';')[0].split(':')[1];
      const base64 = file.split(',')[1];

      const fileObj = {
        mime, base64
      };

      if (personalId.file) {
        try {
          const res = await this.httpService.post(`${process.env.API_FILE}/files/upload`, { file: fileObj }).toPromise();
          updatePersonalDto = { ...updatePersonalDto, file: res.data.file._id };

        } catch (error) {
          throw error.response?.data;
        }
      } else {
        try {
          const res = await this.httpService.post(`${process.env.API_FILE}/files/upload`, { file: fileObj }).toPromise();

          updatePersonalDto = { ...updatePersonalDto, file: res.data.file._id };

        } catch (error) {
          throw error.response?.data;
        }
      }
    } else {
      updatePersonalDto.file = personalId.file;
    }

    return await this.personalModel.findByIdAndUpdate(id, updatePersonalDto, { new: true });
  }
```

## Uso

- `@nestjs/common`: Este módulo proporciona los decoradores y funcionalidades comunes utilizados en NestJS. Se utiliza para importar los decoradores `Injectable` y `HttpException`, así como otros elementos comunes como `BadRequestException` e `InternalServerErrorException`.

- `@nestjs/mongoose`: Este módulo se utiliza para integrar NestJS con MongoDB. Se utiliza para importar el decorador `InjectModel` que se utiliza para inyectar el modelo de la entidad "`Personal`" en el servicio.

- `@nestjs/axios`: Este módulo se utiliza para realizar solicitudes `HTTP` utilizando Axios. Se utiliza para importar el servicio `HttpService`, que se utiliza para hacer solicitudes `HTTP` al API de archivos y al API de entidades.

### PersonalService
Este servicio contiene la lógica relacionada con la entidad "`Personal`". Sus principales metodos son:

- `create(createPersonalDto: CreatePersonalDto):Promise<Personal>`: Este método se utiliza para crear un nuevo registro de personal. Recibe un objeto `createPersonalDto` que contiene los datos necesarios para crear un nuevo registro. Retorna una promesa que se resuelve en el objeto Personal creado.

- `findAll(): Promise<Personal[]>`: Este método se utiliza para obtener todos los registros de personal. Retorna una promesa que se resuelve en un arreglo de objetos Personal que representan todos los registros.

- `find(filter: FilterQuery<Personal>): Promise<Personal[]>`: Este método se utiliza para buscar registros de personal según un filtro específico. Recibe un objeto filter que define las condiciones de búsqueda. Retorna una promesa que se resuelve en un arreglo de objetos Personal que coinciden con el filtro.

- `findAllPaginate(paginationDto: PaginationDto)`: Promise<Personal[]>: Este método se utiliza para obtener registros de personal paginados. Recibe un objeto `paginationDto` que contiene los parámetros de paginación, como el límite y el desplazamiento. Retorna una promesa que se resuelve en un arreglo de objetos Personal que representan los registros paginados.

- `filterParams(filterDto: FilterDto): Promise<Personal[]>`: Este método se utiliza para buscar registros de personal según parámetros de filtro. Recibe un objeto filterDto que contiene los parámetros de filtro, como el nombre y la nacionalidad. Retorna una promesa que se resuelve en un arreglo de objetos Personal que coinciden con los parámetros de filtro.

- `findOne(id: string): Promise<Personal>`: Este método se utiliza para obtener un registro de personal por su `ID`. Recibe el ID del registro como una cadena. Retorna una promesa que se resuelve en el objeto Personal correspondiente al ID proporcionado.

- `update(id: string, updatePersonalDto: UpdatePersonalDto): Promise<Personal>`: Este método se utiliza para actualizar un registro de personal. Recibe el ID del registro a actualizar y un objeto updatePersonalDto que contiene los datos actualizados. Retorna una promesa que se resuelve en el objeto Personal actualizado.

- `unsubscribe(id: string): Promise<Personal>`: Este método se utiliza para dar de baja a un registro de personal. Recibe el ID del registro a dar de baja. Retorna una promesa que se resuelve en el objeto Personal correspondiente al ID proporcionado después de marcarlo como inactivo.

- `activeRegister(id: string): Promise<Personal>`: Este método se utiliza para activar un registro de personal que estaba dado de baja. Recibe el ID del registro a activar. Retorna una promesa que se resuelve en el objeto Personal correspondiente al ID proporcionado después de marcarlo como activo.

### PersonalController
Este controlador maneja las rutas relacionadas con la entidad "Personal". Sus principales metodos son:

- `create(createPersonalDto: CreatePersonalDto): Promise<Personal>`: Este método de ruta `POST` se utiliza para crear un nuevo registro de personal. Recibe un objeto createPersonalDto que contiene los datos necesarios para crear un nuevo registro. Retorna una promesa que se resuelve en el objeto Personal creado.

- `findAll(): Promise<Personal[]>`: Este método de ruta GET se utiliza para obtener todos los registros de personal. Retorna una promesa que se resuelve en un arreglo de objetos Personal que representan todos los registros.

- `findAllActive(): Promise<Personal[]>`: Este método de ruta GET se utiliza para obtener todos los registros de personal activos. Retorna una promesa que se resuelve en un arreglo de objetos Personal que representan los registros activos.

- `findAllPaginate(paginationDto: PaginationDto): Promise<Personal[]>`: Este método de ruta GET se utiliza





