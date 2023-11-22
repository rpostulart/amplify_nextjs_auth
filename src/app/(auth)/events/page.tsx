// TodoList.tsx

"use client";
import type { Schema } from "../../../../amplify/data/resource";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();

export default function Events() {
  const [events, setEvents] = useState<Schema["Event"][]>([]);

  const fetchEvents = async () => {
    const { data: items, errors } = await client.models.Event.list();
    console.warn(client, items, errors);
    setEvents(items);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <ul>
        {events.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
