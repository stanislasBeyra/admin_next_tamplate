"use client"

import * as React from "react"
import {
  BarChart3,
  Users,
  CreditCard,
  MapPin,
  FileText,
  Percent,
  MessageSquare,
  FileBarChart,
  Shield,
  Settings,
  UserCheck,
  Package,
  Mail,
  Bell,
  FileCheck,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Menu items du backoffice
const menuItems = [
  {
    title: "Tableau de bord",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Utilisateurs",
    url: "/users",
    icon: Users,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Agents / PDV",
    url: "/agents",
    icon: MapPin,
  },
  {
    title: "Documents (KYC)",
    url: "/documents",
    icon: FileText,
  },
  {
    title: "Commissions et frais",
    url: "/commissions",
    icon: Percent,
  },
  {
    title: "Support client",
    url: "/support",
    icon: MessageSquare,
  },
  {
    title: "Rapports",
    url: "/reports",
    icon: FileBarChart,
  },
  {
    title: "Sécurité / Logs",
    url: "/security",
    icon: Shield,
  },
  {
    title: "Paramètres système",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Rôles et permissions",
    url: "/roles",
    icon: UserCheck,
  },
  {
    title: "Produits / Services",
    url: "/products",
    icon: Package,
  },
  {
    title: "Messagerie interne",
    url: "/messaging",
    icon: Mail,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Audit et conformité",
    url: "/audit",
    icon: FileCheck,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Adou Service</span>
            <span className="text-xs text-muted-foreground">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          © 2024 Adou Service
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}