"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { firestore } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface EventForm {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
}

export default function CreateEventPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<EventForm>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    capacity: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Here you would typically save the event to Firebase
      const docRef = await addDoc(collection(firestore, "events"), {
        ...formData,
        userId: user?.uid, // Save user ID with event data createdAt: new Date(), // Save creation date
      });
      console.log("Document written with ID: ", docRef.id);
      // For demo purposes, just redirecting
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to create event. Please try again.:" + error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Event</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Capacity</label>
            <input
              type="number"
              name="capacity"
              required
              value={formData.capacity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#f02e65] focus:border-[#f02e65]"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#f02e65] text-white rounded-md hover:bg-[#ab073d] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
