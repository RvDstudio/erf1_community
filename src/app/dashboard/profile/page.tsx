import React from 'react';
import { Breadcrumbs } from '@/components/dashboard/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Profile', href: '/dashboard/profile' },
  ];

  return (
    <div className="container mx-auto px-6 pb-8 md:px-0 ">
      <div className="mb-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <main className="flex-1 p-0 pt-4">
        <Card className="border border-[#424242] bg-[#2A2A2A]">
          <CardHeader>
            <CardTitle className="font-medium text-[#A0A0A0]">
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-sm">Name</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
