"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { getCustomerInsights } from "@/app/admin/insights/actions";
import type { AnalyzeCustomerFeedbackOutput } from "@/ai/flows/customer-insight-ai";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  customerReviews: z.string().min(50, { message: "Por favor ingresa al menos 50 caracteres de reseñas." }),
});

export function CustomerInsightForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeCustomerFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerReviews: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const result = await getCustomerInsights(values);

    if ("error" in result) {
      setError(result.error);
    } else {
      setAnalysisResult(result);
    }
    setIsLoading(false);
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Analizar Reseñas de Clientes</CardTitle>
          <CardDescription>
            Pega las reseñas de los clientes aquí para obtener un resumen y sugerencias personalizadas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="customerReviews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reseñas de Clientes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: 'El café estuvo delicioso y el ambiente muy tranquilo. El wifi funcionaba perfecto. Solo tardaron un poco en atenderme...'"
                        className="min-h-[200px] resize-none bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generar Análisis
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error en el Análisis</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {analysisResult && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Resultados del Análisis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Resumen General</h3>
              <p className="text-foreground/80 whitespace-pre-wrap">{analysisResult.summary}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Sugerencias y Mejoras</h3>
              <p className="text-foreground/80 whitespace-pre-wrap">{analysisResult.suggestions}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
