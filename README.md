## Estrategia de Ramificación (GitFlow Adaptado)

Para este proyecto se implementó una estrategia de control de versiones basada en ramas para asegurar la trazabilidad del código fuente de acuerdo con los estándares DevOps:

* **`main`**: Rama principal que representa el código en producción estable. Cualquier cambio integrado aquí gatilla automáticamente el despliegue continuo (CD) en la instancia AWS EC2.
* **`feature/...`**: Ramas temporales utilizadas para el desarrollo de nuevas funcionalidades o componentes del microservicio. Se integran a la rama base mediante Pull Requests (PR).
* **`hotfix/...`**: Ramas de emergencia creadas directamente a partir de fallos detectados en producción para aplicar parches inmediatos de forma controlada.

### Convención de Mensajes de Commit
Se utiliza la especificación de *Conventional Commits* para facilitar la auditoría automatizada y el versionado:
* `feat:` para nuevas características.
* `fix:` para la resolución de errores o bugs.
* `docs:` para cambios en la documentación técnica.
