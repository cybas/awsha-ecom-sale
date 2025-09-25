import { cn } from '@/lib/utils';

interface PriceProps {
  mrp: number;
  sale: number;
  className?: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Price = ({ mrp, sale, className }: PriceProps) => {
  const hasSale = sale < mrp;

  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="text-xl font-bold" style={{ color: 'hsl(var(--aw-green))' }}>
        {formatCurrency(hasSale ? sale : mrp)}
      </span>
      {hasSale && (
        <span className="text-base text-muted-foreground line-through">
          {formatCurrency(mrp)}
        </span>
      )}
    </div>
  );
};

export default Price;
