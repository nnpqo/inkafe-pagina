import { SectionTitle } from '@/components/SectionTitle';
import { CustomerInsightForm } from '@/components/CustomerInsightForm';

export default function CustomerInsightsPage() {
  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="container max-w-3xl">
        <SectionTitle 
          title="Herramienta de IA para Inkafe" 
          subtitle="Analiza automáticamente las reseñas de tus clientes para obtener información valiosa y mejorar tu servicio." 
          centered 
        />
        <CustomerInsightForm />
      </div>
    </div>
  );
}
