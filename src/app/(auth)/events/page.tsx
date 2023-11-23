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
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {events.map((item, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
