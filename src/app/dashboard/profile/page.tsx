import React from "react";
import { Breadcrumbs } from "@/components/dashboard/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Shield,
  Users,
  UserPlus,
  Bell,
  CreditCard,
  Download,
  Trash2,
  Edit2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { getUserProfile, updateUserProfile } from "@/server/users";
import { ProfileContent } from "@/components/dashboard/ProfileContent";
import { redirect } from "next/navigation";

const accountSettingsItems = [
  {
    id: "profile",
    label: "My Profile",
    icon: User,
    active: true,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    active: false,
  },
  {
    id: "teams",
    label: "Teams",
    icon: Users,
    active: false,
  },
  {
    id: "team-member",
    label: "Team Member",
    icon: UserPlus,
    active: false,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    active: false,
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    active: false,
  },
  {
    id: "data-export",
    label: "Data Export",
    icon: Download,
    active: false,
  },
  {
    id: "delete-account",
    label: "Delete Account",
    icon: Trash2,
    active: false,
    danger: true,
  },
];

export default async function ProfilePage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/dashboard/profile" },
  ];

  let userData = null;
  let error = null;

  try {
    userData = await getUserProfile();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load profile";
  }

  // Server action to handle profile updates
  async function handleUpdateProfile(formData: FormData) {
    "use server";

    const updateData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      bio: formData.get("bio") as string,
      role: formData.get("role") as string,
      location: formData.get("location") as string,
      country: formData.get("country") as string,
      cityState: formData.get("cityState") as string,
      postalCode: formData.get("postalCode") as string,
      taxId: formData.get("taxId") as string,
    };

    try {
      await updateUserProfile(updateData);
      redirect("/dashboard/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }

  return (
    <div className="container mx-auto px-6 pb-8 md:px-0 pt-6">
      <div className="mb-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="flex gap-6 pt-4">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Card className="border border-gray-200 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-gray-900 text-lg font-semibold">
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="space-y-1">
                {accountSettingsItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                        item.active
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                          : item.danger
                            ? "text-red-600 hover:bg-red-50 hover:text-red-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {error ? (
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-red-600 mb-2">Error loading profile</p>
                  <p className="text-gray-500 text-sm">{error}</p>
                </div>
              </CardContent>
            </Card>
          ) : userData ? (
            <ProfileContent
              userData={userData}
              onUpdate={handleUpdateProfile}
            />
          ) : (
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-gray-500">Loading profile...</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
