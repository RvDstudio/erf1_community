"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2, MapPin } from "lucide-react";

interface ProfileData {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  bio: string | null;
  role: string | null;
  location: string | null;
  country: string | null;
  cityState: string | null;
  postalCode: string | null;
  taxId: string | null;
}

interface ProfileContentProps {
  userData: ProfileData;
  onUpdate: (formData: FormData) => Promise<void>;
}

export function ProfileContent({ userData, onUpdate }: ProfileContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = async (formData: FormData) => {
    setIsUpdating(true);
    try {
      await onUpdate(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const displayName =
    userData.name ||
    `${userData.firstName || ""} ${userData.lastName || ""}`.trim() ||
    "User";
  const displayRole = userData.role || "No role specified";
  const displayLocation = userData.location || "No location specified";

  return (
    <Card className="border border-gray-200 bg-white">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 text-xl font-semibold">
            My Profile
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleEdit}
            className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            <Edit2 className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={userData.image || ""} alt={displayName} />
            <AvatarFallback className="bg-gray-100 text-gray-700 text-lg">
              {userData.firstName?.[0] || userData.name?.[0] || "U"}
              {userData.lastName?.[0] || ""}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-gray-900 text-xl font-semibold">
              {displayName}
            </h2>
            <p className="text-gray-600 text-sm">{displayRole}</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600 text-sm">{displayLocation}</span>
            </div>
          </div>
        </div>

        {isEditing ? (
          <form action={handleFormSubmit} className="space-y-8">
            {/* Personal Information - Edit Mode */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900 text-lg font-semibold">
                  Personal Information
                </h3>
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  disabled={isUpdating}
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {isUpdating ? "Saving..." : "Save"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    defaultValue={userData.firstName || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    defaultValue={userData.lastName || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    disabled
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    defaultValue={userData.phone || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-700 text-sm block mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    defaultValue={userData.bio || ""}
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Role
                  </label>
                  <input
                    name="role"
                    type="text"
                    defaultValue={userData.role || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Location
                  </label>
                  <input
                    name="location"
                    type="text"
                    defaultValue={userData.location || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Address - Edit Mode */}
            <div className="space-y-6">
              <h3 className="text-gray-900 text-lg font-semibold">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    defaultValue={userData.country || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    City/State
                  </label>
                  <input
                    name="cityState"
                    type="text"
                    defaultValue={userData.cityState || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    Postal Code
                  </label>
                  <input
                    name="postalCode"
                    type="text"
                    defaultValue={userData.postalCode || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm block mb-2">
                    TAX ID
                  </label>
                  <input
                    name="taxId"
                    type="text"
                    defaultValue={userData.taxId || ""}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </form>
        ) : (
          <>
            {/* Personal Information - View Mode */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900 text-lg font-semibold">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-600 text-sm">First Name</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.firstName || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Last Name</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.lastName || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Email address</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.email}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Phone</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.phone || "Not specified"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-gray-600 text-sm">Bio</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.bio || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Role</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.role || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Location</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.location || "Not specified"}
                  </p>
                </div>
              </div>
            </div>

            {/* Address - View Mode */}
            <div className="space-y-6">
              <h3 className="text-gray-900 text-lg font-semibold">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-600 text-sm">Country</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.country || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">City/State</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.cityState || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Postal Code</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.postalCode || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">TAX ID</label>
                  <p className="text-gray-900 font-medium mt-1">
                    {userData.taxId || "Not specified"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
