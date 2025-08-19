"use client"

import * as React from "react"
import {
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Download,
  RefreshCw,
  Menu,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8">
      {/* Header responsive */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Tableau de bord
          </h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Vue d'ensemble de vos activités et performances
          </p>
        </div>
        
        {/* Boutons d'action responsive */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
          {/* Menu mobile pour les actions */}
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le rapport
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Actualiser
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Boutons desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Télécharger le rapport
            </Button>
            <Button size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Actualiser
            </Button>
          </div>
        </div>
      </div>

      {/* Statistiques principales - Responsive grid */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Revenus totaux</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">2,847,500 FCFA</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </span>
              <span className="hidden sm:inline"> par rapport au mois dernier</span>
              <span className="sm:hidden">vs mois dernier</span>
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Utilisateurs actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2%
              </span>
              <span className="hidden sm:inline"> nouveaux utilisateurs ce mois</span>
              <span className="sm:hidden">nouveaux ce mois</span>
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">8,942</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1%
              </span>
              <span className="hidden sm:inline"> par rapport à la semaine dernière</span>
              <span className="sm:hidden">vs semaine dernière</span>
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium">Agents PDV</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +4
              </span>
              <span className="hidden sm:inline"> nouveaux agents ce mois</span>
              <span className="sm:hidden">nouveaux ce mois</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section graphiques et activités - Responsive */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        {/* Graphique des revenus */}
        <Card className="lg:col-span-4 xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Aperçu des revenus</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Évolution des revenus sur les 12 derniers mois
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[150px] sm:h-[180px] lg:h-[200px] flex items-end justify-between space-x-1 sm:space-x-2">
              {[65, 45, 78, 52, 89, 67, 94, 73, 85, 91, 76, 88].map((height, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-t flex-1 transition-all hover:opacity-80 hover:scale-105"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            {/* Légende mobile */}
            <div className="mt-4 text-xs text-muted-foreground text-center sm:hidden">
              Jan Fév Mar Avr Mai Jun Jul Aoû Sep Oct Nov Déc
            </div>
          </CardContent>
        </Card>

        {/* Activités récentes */}
        <Card className="lg:col-span-3 xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Activités récentes</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Dernières actions importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">Nouveau document KYC validé</p>
                  <p className="text-xs text-muted-foreground">Il y a 2 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">Transaction de 50,000 FCFA</p>
                  <p className="text-xs text-muted-foreground">Il y a 5 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">Nouvel agent PDV inscrit</p>
                  <p className="text-xs text-muted-foreground">Il y a 12 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">Alerte de sécurité</p>
                  <p className="text-xs text-muted-foreground">Il y a 18 minutes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section transactions et statut système - Responsive */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        {/* Transactions récentes */}
        <Card className="lg:col-span-4 xl:col-span-4">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Transactions récentes</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Liste des dernières transactions effectuées
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Table responsive */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs sm:text-sm">ID</TableHead>
                    <TableHead className="text-xs sm:text-sm hidden sm:table-cell">Utilisateur</TableHead>
                    <TableHead className="text-xs sm:text-sm">Type</TableHead>
                    <TableHead className="text-xs sm:text-sm hidden md:table-cell">Montant</TableHead>
                    <TableHead className="text-xs sm:text-sm">Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">#TXN001</TableCell>
                    <TableCell className="hidden sm:table-cell text-xs sm:text-sm">Jean Kouassi</TableCell>
                    <TableCell className="text-xs sm:text-sm">Transfert</TableCell>
                    <TableCell className="hidden md:table-cell text-xs sm:text-sm">25,000 FCFA</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Réussie</span>
                        <span className="sm:hidden">OK</span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">#TXN002</TableCell>
                    <TableCell className="hidden sm:table-cell text-xs sm:text-sm">Marie Diabaté</TableCell>
                    <TableCell className="text-xs sm:text-sm">Dépôt</TableCell>
                    <TableCell className="hidden md:table-cell text-xs sm:text-sm">15,000 FCFA</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                        <Activity className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">En cours</span>
                        <span className="sm:hidden">En cours</span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">#TXN003</TableCell>
                    <TableCell className="hidden sm:table-cell text-xs sm:text-sm">Koffi Assouan</TableCell>
                    <TableCell className="text-xs sm:text-sm">Retrait</TableCell>
                    <TableCell className="hidden md:table-cell text-xs sm:text-sm">50,000 FCFA</TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="bg-red-100 text-red-800 text-xs">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Échouée</span>
                        <span className="sm:hidden">Erreur</span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Statut du système */}
        <Card className="lg:col-span-3 xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Statut du système</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              État de santé des services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium">API Gateway</span>
                <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                  <span className="hidden sm:inline">Opérationnel</span>
                  <span className="sm:hidden">OK</span>
                </Badge>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium">Base de données</span>
                <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                  <span className="hidden sm:inline">Opérationnel</span>
                  <span className="sm:hidden">OK</span>
                </Badge>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium">Service de paiement</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                  <span className="hidden sm:inline">Dégradé</span>
                  <span className="sm:hidden">Dégradé</span>
                </Badge>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium">Notifications</span>
                <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                  <span className="hidden sm:inline">Opérationnel</span>
                  <span className="sm:hidden">OK</span>
                </Badge>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
