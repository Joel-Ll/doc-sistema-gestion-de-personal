---
id: permission-enum-ts
title: permission.enum.ts
sidebar_label: permission.enum.ts
---

El archivo `permission.enum.ts` define el enumerado `Permission`, el cual representa diferentes permisos en una aplicación. Cada permiso se representa como una cadena de texto.

## Código Fuente
```typescript
export enum Permission {
  CREAR_PERSONAL = 'CREAR_PERSONAL_PERS',
  EDITAR_PERSONAL = 'EDITAR_PERSONAL_PERS',
  ELIMINAR_PERSONAL = 'ELIMINAR_PERSONAL_PERS',
  RESTABLECER_PERSONAL = 'RESTABLECER_PERSONAL_PERS',
  CREAR_PERMISO = 'CREAR_PERMISO_PERS',
  EDITAR_PERMISO = 'EDITAR_PERMISO_PERS',
  ELIMINAR_PERMISO = 'ELIMINAR_PERMISO_PERS'
}
```

## Uso
El código en permission.enum.ts contiene lo siguiente:

1. Se exporta el enumerado Permission que define diferentes permisos en una aplicación.

2. Cada permiso se representa como un miembro del enumerado con un nombre en mayúsculas seguido de un valor de cadena de texto. Por ejemplo:

- `CREAR_PERSONAL` representa el permiso para crear personal y su valor es 'CREAR_PERSONAL_PERS'.
- `EDITAR_PERSONAL` representa el permiso para editar personal y su valor es 'EDITAR_PERSONAL_PERS'.
- `ELIMINAR_PERSONAL` representa el permiso para eliminar personal y su valor es 'ELIMINAR_PERSONAL_PERS'.
- `RESTABLECER_PERSONAL` representa el permiso para restablecer personal y su valor es 'RESTABLECER_PERSONAL_PERS'.
- `CREAR_PERMISO` representa el permiso para crear permiso y su valor es 'CREAR_PERMISO_PERS'.
- `EDITAR_PERMISO` representa el permiso para editar permiso y su valor es 'EDITAR_PERMISO_PERS'.
- `ELIMINAR_PERMISO` representa el permiso para eliminar permiso y su valor es 'ELIMINAR_PERMISO_PERS'.

Con esta documentación, se describe el enumerado Permission que define diferentes permisos en una aplicación y proporciona una forma consistente de referirse a ellos utilizando cadenas de texto.






