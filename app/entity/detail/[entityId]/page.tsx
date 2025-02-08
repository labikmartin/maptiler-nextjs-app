'use client';

import { useParams } from 'next/navigation';

export default function EntityDetailPage() {
  const params = useParams();
  const entityId = params.entityId;

  return <h1>Hello from Entity {entityId} detail</h1>;
}
