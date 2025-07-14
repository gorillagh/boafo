
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDashboard } from '@/context/DashboardContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, CreditCard, Save, LogOut } from 'lucide-react';

export default function ProfileSidebar() {
  const { user, plan } = useDashboard();
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };
  
  const handleManageBilling = () => {
    navigate('/dashboard/billing');
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800">
        <CardHeader className="text-center border-b dark:border-gray-700">
            <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-green-400 dark:border-green-500">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="text-3xl">{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">{user.name}</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
            <Badge className={`mt-2 capitalize ${plan === 'pro' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                {plan} Plan
            </Badge>
        </CardHeader>

        <CardContent className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user.name} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue={user.email} />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
            <Button variant="outline" className="w-full" onClick={handleManageBilling}>
                <CreditCard className="mr-2 h-4 w-4" /> Manage Billing
            </Button>
        </CardContent>
        
        <div className="p-6 border-t dark:border-gray-700">
             <button
                onClick={() => (window.location.href = "/login")}
                className="w-full flex items-center justify-center p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
            >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
            </button>
        </div>
    </div>
  );
}
