import {
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';
import React from 'react';
import { Breadcrumbs } from '@/components/dashboard/Breadcrumbs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  const breadcrumbItems = [{ label: 'Dashboard', href: '/dashboard' }];

  return (
    <div className="container mx-auto px-6 pb-8 md:px-0 ">
      <div className="mb-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <main className="flex-1 p-0 pt-0 md:p-6">
        <Tabs defaultValue="overview">
          <div className="flex items-center justify-between">
            <TabsList className="border border-[#424242] bg-[#2A2A2A]">
              <TabsTrigger className="text-[#7A7A7A]" value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger className="text-[#7A7A7A]" value="analytics">
                Analytics
              </TabsTrigger>
              <TabsTrigger className="text-[#7A7A7A]" value="reports">
                Reports
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button
                className="h-8 cursor-pointer border border-[#424242] bg-[#242424] text-[#7A7A7A] hover:border-[#424242] hover:bg-[#1d1d1d] hover:text-[#7A7A7A]"
                size="sm"
                variant="outline"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          <TabsContent className="space-y-4 pt-4" value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-medium text-[#A0A0A0] text-sm">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="font-bold text-2xl text-[#7A7A7A]">
                    $45,231.89
                  </div>
                  <p className="text-muted-foreground text-xs">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-medium text-[#A0A0A0] text-sm">
                    Subscriptions
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="font-bold text-2xl text-[#7A7A7A]">+2350</div>
                  <p className="text-muted-foreground text-xs">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-medium text-[#A0A0A0] text-sm">
                    Sales
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="font-bold text-2xl text-[#7A7A7A]">
                    +12,234
                  </div>
                  <p className="text-muted-foreground text-xs">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="font-medium text-[#A0A0A0] text-sm">
                    Active Now
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="font-bold text-2xl text-[#7A7A7A]">+573</div>
                  <p className="text-muted-foreground text-xs">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="border border-[#424242] bg-[#2A2A2A] lg:col-span-4">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Recent Sales
                  </CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-[#7A7A7A]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae omnis possimus fugiat qui voluptate ratione
                    consequuntur necessitatibus ipsum suscipit optio?
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-[#424242] bg-[#2A2A2A] lg:col-span-3">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Recent Orders
                  </CardTitle>
                  <CardDescription>
                    You received 30 orders this month.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-[#7A7A7A]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae omnis possimus fugiat qui voluptate ratione
                    consequuntur necessitatibus ipsum suscipit optio?
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full cursor-pointer border border-[#424242] bg-[#242424] text-[#7A7A7A] hover:border-[#424242] hover:bg-[#1d1d1d] hover:text-[#7A7A7A]"
                    variant="outline"
                  >
                    View All Orders
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="border border-[#424242] bg-[#2A2A2A] lg:col-span-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle className="font-medium text-[#A0A0A0]">
                      Performance Overview
                    </CardTitle>
                    <CardDescription>
                      Monthly revenue and user growth
                    </CardDescription>
                  </div>
                  <div>
                    <Button
                      className="border border-[#424242] bg-[#242424] text-[#7A7A7A]"
                      size="sm"
                      variant="outline"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Last 30 days
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[300px] w-full items-center justify-center rounded-md border border-[#424242] border-dashed bg-[#242424]">
                    <div className="flex flex-col items-center text-center">
                      <BarChart3 className="mb-2 h-10 w-10 text-muted-foreground" />
                      <p className="text-muted-foreground text-sm">
                        Performance chart visualization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-[#424242] bg-[#2A2A2A] lg:col-span-3">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Recent Notifications
                  </CardTitle>
                  <CardDescription>
                    Stay updated with the latest alerts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Users,
                        color: 'text-blue-500',
                        bg: 'bg-blue-100',
                        title: 'New team member joined',
                        time: '2 hours ago',
                      },
                      {
                        icon: CreditCard,
                        color: 'text-green-500',
                        bg: 'bg-green-100',
                        title: 'Subscription payment successful',
                        time: '5 hours ago',
                      },
                      {
                        icon: ShoppingCart,
                        color: 'text-yellow-500',
                        bg: 'bg-yellow-100',
                        title: 'New order received',
                        time: '1 day ago',
                      },
                      {
                        icon: Package,
                        color: 'text-red-500',
                        bg: 'bg-red-100',
                        title: 'Product out of stock',
                        time: '2 days ago',
                      },
                    ].map((notification, i) => (
                      <div className="flex items-start gap-4" key={i}>
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${notification.bg}`}
                        >
                          <notification.icon
                            className={`h-4 w-4 ${notification.color}`}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium text-[#7A7A7A] text-sm leading-none">
                            {notification.title}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Frequently used tools and shortcuts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Users, label: 'Add User' },
                      { icon: Package, label: 'New Product' },
                      { icon: CreditCard, label: 'Billing' },
                      { icon: Settings, label: 'Settings' },
                    ].map((action, i) => (
                      <Button
                        className="h-20 cursor-pointer flex-col border border-[#424242] bg-[#242424] text-[#7A7A7A] hover:border-[#424242] hover:bg-[#1d1d1d] hover:text-[#7A7A7A]"
                        key={i}
                        variant="outline"
                      >
                        <action.icon className="mb-2 h-5 w-5" />
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Upcoming Tasks
                  </CardTitle>
                  <CardDescription>
                    Your scheduled tasks for today
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Team meeting',
                        time: '10:00 AM',
                        completed: false,
                      },
                      {
                        title: 'Project review',
                        time: '1:30 PM',
                        completed: false,
                      },
                      {
                        title: 'Client call',
                        time: '3:00 PM',
                        completed: false,
                      },
                      {
                        title: 'Update documentation',
                        time: '4:30 PM',
                        completed: true,
                      },
                    ].map((task, i) => (
                      <div className="flex items-center gap-2" key={i}>
                        <div
                          className={`h-5 w-5 rounded-full border ${task.completed ? 'border-primary bg-primary' : 'border-muted-foreground'} flex items-center justify-center`}
                        >
                          {task.completed && (
                            <div className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-medium text-sm ${task.completed ? 'text-muted-foreground line-through' : 'text-[#7A7A7A]'}`}
                          >
                            {task.title}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {task.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-[#424242] bg-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="font-medium text-[#A0A0A0]">
                    Team Activity
                  </CardTitle>
                  <CardDescription>
                    Recent actions from your team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        user: 'Alex',
                        action: 'created a new project',
                        time: 'Just now',
                      },
                      {
                        user: 'Sarah',
                        action: 'completed 3 tasks',
                        time: '1 hour ago',
                      },
                      {
                        user: 'Michael',
                        action: 'uploaded new files',
                        time: '3 hours ago',
                      },
                      {
                        user: 'Jessica',
                        action: 'invited 2 new members',
                        time: 'Yesterday',
                      },
                    ].map((activity, i) => (
                      <div className="flex items-start gap-4" key={i}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary text-xs">
                          {activity.user.charAt(0)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm">
                            <span className="font-medium text-[#7A7A7A]">
                              {activity.user}
                            </span>{' '}
                            {activity.action}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent className="space-y-4 pt-4" value="analytics">
            <Card className="border border-[#424242] bg-[#2A2A2A]">
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  View your analytics data and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[400px] w-full items-center justify-center rounded-md border border-dashed text-muted-foreground">
                  Analytics charts will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent className="space-y-4 pt-4" value="reports">
            <Card className="border border-[#424242] bg-[#2A2A2A]">
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  View and download your reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[400px] w-full items-center justify-center rounded-md border border-dashed text-muted-foreground">
                  Reports will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
