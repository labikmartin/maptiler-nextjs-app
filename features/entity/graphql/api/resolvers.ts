import type { Entity } from '@/features/entity';

type EntityId = Entity['id'];

export function getEntities(entities: Entity[]) {
  return () => entities;
}

export function getEntity(entities: Entity[]) {
  return (_: unknown, { id }: { id: EntityId }) =>
    entities.find((entity) => entity.id === id);
}

export function createEntity(entities: Entity[]) {
  return (_: unknown, { name, status }: Entity) => {
    const entity = {
      id: String(entities.length + 1),
      name,
      status,
    };

    entities.push(entity);

    return entity;
  };
}

export function updateEntity(entities: Entity[]) {
  return (_: unknown, { id, name, status }: Entity) => {
    const entity = {
      id,
      name,
      status,
    };

    const entityIndex = entities.findIndex((entity) => entity.id === id);
    entities.splice(entityIndex, 1, entity);

    return entity;
  };
}

export function deleteEntity(entities: Entity[]) {
  return (_: unknown, { id }: { id: EntityId }) => {
    const entityIndex = entities.findIndex((entity) => entity.id === id);
    entities.splice(entityIndex, 1);

    return entityIndex;
  };
}
