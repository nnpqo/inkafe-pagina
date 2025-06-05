
"use client";

import type { CafeTable, TableStatus } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User, CheckCircle, XCircle, Ban } from 'lucide-react';

interface TableLayoutProps {
  tables: CafeTable[];
  selectedTableId: string | null;
  onTableSelect: (tableId: string) => void;
}

export function TableLayout({ tables, selectedTableId, onTableSelect }: TableLayoutProps) {
  const maxRows = Math.max(...tables.map(t => t.position.row), 0);
  const maxCols = Math.max(...tables.map(t => t.position.col), 0);

  const getTableStatusIcon = (status: TableStatus) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="h-4 w-4 mr-1" />;
      case 'selected':
        return <User className="h-4 w-4 mr-1" />;
      case 'reserved':
        return <Ban className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="grid gap-3 p-4 bg-card rounded-lg shadow-md"
      style={{
        gridTemplateRows: `repeat(${maxRows}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${maxCols}, minmax(0, 1fr))`,
      }}
    >
      {tables.map((table) => (
        <Button
          key={table.id}
          onClick={() => table.status !== 'reserved' && onTableSelect(table.id)}
          disabled={table.status === 'reserved'}
          variant={selectedTableId === table.id ? 'default' : table.status === 'reserved' ? 'secondary' : 'outline'}
          className={cn(
            "flex flex-col items-center justify-center p-2 h-24 w-full transition-all duration-150 ease-in-out",
            "focus:ring-2 focus:ring-ring focus:ring-offset-2",
            table.status === 'reserved' && "opacity-60 cursor-not-allowed bg-muted text-muted-foreground",
            selectedTableId === table.id && "ring-2 ring-primary scale-105 shadow-lg",
            table.status === 'available' && "hover:bg-accent/20"
          )}
          style={{
            gridRowStart: table.position.row,
            gridColumnStart: table.position.col,
          }}
          aria-label={`Mesa ${table.name}, Capacidad: ${table.capacity}, Estado: ${table.status}`}
        >
          <div className="flex items-center text-sm">
            {getTableStatusIcon(selectedTableId === table.id ? 'selected' : table.status)}
            <span>{table.name}</span>
          </div>
          <span className="text-xs mt-1">
            {table.capacity} <User size={12} className="inline-block ml-0.5" />
          </span>
          {selectedTableId === table.id && <span className="text-xs mt-1 font-semibold">(Seleccionada)</span>}
           {table.status === 'reserved' && <span className="text-xs mt-1">(Reservada)</span>}
        </Button>
      ))}
    </div>
  );
}
