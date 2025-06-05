
"use client";

import { useState, useEffect } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { TableLayout } from '@/components/TableLayout';
import { ReservationForm } from '@/components/ReservationForm';
import type { ReservationFormValues } from '@/components/ReservationForm';
import { initialCafeTables, CafeTable } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Info } from 'lucide-react';

export default function ReservationsPage() {
  const [tables, setTables] = useState<CafeTable[]>(initialCafeTables);
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [confirmedReservationDetails, setConfirmedReservationDetails] = useState<ReservationFormValues | null>(null);

  const { toast } = useToast();

  const handleTableSelect = (tableId: string) => {
    const table = tables.find(t => t.id === tableId);
    if (table && table.status !== 'reserved') {
      setSelectedTableId(prevId => (prevId === tableId ? null : tableId));
      setReservationConfirmed(false); // Clear confirmation if new table selected
    }
  };

  const handleSubmitReservation = async (values: ReservationFormValues) => {
    console.log("Reserva enviada:", values);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setTables(prevTables =>
      prevTables.map(table =>
        table.id === values.tableId ? { ...table, status: 'reserved' } : table
      )
    );
    
    setConfirmedReservationDetails(values);
    setReservationConfirmed(true);
    setSelectedTableId(null); // Deselect table

    toast({
      title: "¡Reserva Confirmada!",
      description: `Tu mesa ${tables.find(t=>t.id === values.tableId)?.name} ha sido reservada para ${values.guests} personas el ${values.date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} a las ${values.time}.`,
    });
    
    // Optional: auto-hide confirmation after some time
    // setTimeout(() => setReservationConfirmed(false), 10000);
  };

  const selectedTableDetails = tables.find(t => t.id === selectedTableId);

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle
          title="Reserva tu Mesa"
          subtitle="Elige tu mesa preferida en nuestro mapa interactivo y completa tus datos para asegurar tu lugar en Inkafe."
          centered
        />

        {reservationConfirmed && confirmedReservationDetails && (
          <Alert variant="default" className="mb-8 bg-green-50 border-green-500 text-green-700">
            <CheckCircle className="h-5 w-5 text-green-700" />
            <AlertTitle className="font-semibold">¡Reserva Realizada con Éxito!</AlertTitle>
            <AlertDescription>
              Has reservado la mesa <strong>{tables.find(t=>t.id === confirmedReservationDetails.tableId)?.name}</strong> para <strong>{confirmedReservationDetails.guests}</strong> personas
              el día <strong>{new Date(confirmedReservationDetails.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong> a las <strong>{confirmedReservationDetails.time}</strong>.
              ¡Te esperamos, {confirmedReservationDetails.name}!
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">1. Selecciona tu Mesa</CardTitle>
              <CardDescription>Haz clic en una mesa disponible para seleccionarla. Las mesas en gris ya están reservadas.</CardDescription>
            </CardHeader>
            <CardContent>
              <TableLayout
                tables={tables}
                selectedTableId={selectedTableId}
                onTableSelect={handleTableSelect}
              />
               <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-green-500" /> Disponible</div>
                <div className="flex items-center"><User className="h-4 w-4 mr-1 text-blue-500" /> Seleccionada</div>
                <div className="flex items-center"><Ban className="h-4 w-4 mr-1 text-red-500" /> Reservada</div>
              </div>
            </CardContent>
          </Card>

          <Card className={cn("shadow-lg transition-opacity duration-300", selectedTableId || reservationConfirmed ? "opacity-100" : "opacity-60 pointer-events-none")}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                2. Completa tus Datos {selectedTableDetails ? `(Mesa ${selectedTableDetails.name})` : ''}
              </CardTitle>
              {!selectedTableId && !reservationConfirmed && (
                 <CardDescription className="flex items-center text-accent">
                    <Info className="h-4 w-4 mr-2 shrink-0" />
                    Por favor, selecciona una mesa del mapa para continuar con la reserva.
                 </CardDescription>
              )}
               {selectedTableId && !reservationConfirmed && (
                 <CardDescription>
                    Estás reservando la mesa <strong>{selectedTableDetails?.name}</strong> con capacidad para <strong>{selectedTableDetails?.capacity}</strong> personas.
                 </CardDescription>
              )}
               {reservationConfirmed && (
                 <CardDescription>
                    Puedes realizar una nueva reserva seleccionando otra mesa.
                 </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ReservationForm
                selectedTable={selectedTableDetails || null}
                onSubmitReservation={handleSubmitReservation}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
