
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import type { CafeTable } from "@/lib/data";
import { availableTimes } from "@/lib/data";

const reservationFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor ingresa un correo electrónico válido." }),
  date: z.date({ required_error: "Por favor selecciona una fecha." }),
  time: z.string({ required_error: "Por favor selecciona una hora." }),
  guests: z.coerce.number().min(1, { message: "Debe haber al menos 1 comensal." }),
  tableId: z.string(),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;

interface ReservationFormProps {
  selectedTable: CafeTable | null;
  onSubmitReservation: (values: ReservationFormValues) => Promise<void>;
}

export function ReservationForm({ selectedTable, onSubmitReservation }: ReservationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      guests: 1,
      tableId: selectedTable?.id || "",
    },
  });

  useEffect(() => {
    if (selectedTable) {
      form.setValue("tableId", selectedTable.id);
      form.setValue("guests", Math.min(form.getValues("guests") || 1, selectedTable.capacity));
    } else {
       form.reset({
        name: "",
        email: "",
        date: undefined,
        time: "",
        guests: 1,
        tableId: "",
      });
    }
  }, [selectedTable, form]);
  
  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numGuests = parseInt(e.target.value, 10);
    if (selectedTable && numGuests > selectedTable.capacity) {
      form.setValue("guests", selectedTable.capacity);
      toast({
        title: "Máxima Capacidad Alcanzada",
        description: `La mesa ${selectedTable.name} tiene una capacidad máxima de ${selectedTable.capacity} comensales.`,
        variant: "destructive",
      });
    } else if (numGuests < 1 && e.target.value !== "") {
      form.setValue("guests", 1);
    }
    else {
       form.setValue("guests", isNaN(numGuests) ? 0 : numGuests); // Allow temporary 0 for typing
    }
  };

  const handleGuestsBlur = () => {
    const guests = form.getValues("guests");
    if (guests === 0 || isNaN(guests)) {
        form.setValue("guests", 1);
    }
  };


  async function onSubmit(values: ReservationFormValues) {
    if (!selectedTable) {
      toast({ title: "Error", description: "Por favor, selecciona una mesa primero.", variant: "destructive" });
      return;
    }
    if (values.guests > selectedTable.capacity) {
      toast({
        title: "Demasiados Comensales",
        description: `La mesa ${selectedTable.name} solo tiene capacidad para ${selectedTable.capacity} personas. Por favor, ajusta el número de comensales o elige otra mesa.`,
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    await onSubmitReservation(values);
    setIsSubmitting(false);
    form.reset({
        name: "",
        email: "",
        date: undefined,
        time: "",
        guests: 1,
        tableId: "", // Reset tableId so form is ready for new selection
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="tableId"
          render={({ field }) => <Input type="hidden" {...field} />}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Juan Pérez" {...field} className="bg-background" disabled={!selectedTable || isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Ej: juan.perez@correo.com" {...field} className="bg-background" disabled={!selectedTable || isSubmitting}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal bg-background",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={!selectedTable || isSubmitting}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0,0,0,0)) || !selectedTable
                      }
                      initialFocus
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} disabled={!selectedTable || isSubmitting}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Selecciona una hora" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimes.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Comensales</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="Ej: 2" 
                  {...field} 
                  onChange={handleGuestsChange}
                  onBlur={handleGuestsBlur}
                  className="bg-background" 
                  min="1"
                  max={selectedTable?.capacity?.toString()}
                  disabled={!selectedTable || isSubmitting}
                />
              </FormControl>
              {selectedTable && <FormMessage>Capacidad máx. para esta mesa: {selectedTable.capacity}</FormMessage>}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={!selectedTable || isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Confirmando Reserva...
            </>
          ) : (
            "Confirmar Reserva"
          )}
        </Button>
      </form>
    </Form>
  );
}
