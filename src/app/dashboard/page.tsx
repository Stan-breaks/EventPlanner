"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/lib/firebase"; // Import your configured Firestore

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "events"));
        const eventsData: Event[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          eventsData.push({
            id: doc.id,
            title: data.title,
            date: data.date,
            time: data.time,
            location: data.location,
            description: data.description,
            capacity: data.capacity,
          });
        });
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events: ", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f02e65]"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.displayName}</h1>
        <button
          onClick={() => router.push("/create")}
          className="px-4 py-2 bg-[#f02e65] text-white rounded-md hover:bg-[#ab073d]"
        >
          Create New Event
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <div className="space-y-2 text-gray-600">
              <p>Description: {event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
              <p>Capacity: {event.capacity}</p>
            </div>
            <div className="mt-4 flex space-x-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
