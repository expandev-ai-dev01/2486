import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/card';
import { cn } from '@/core/lib/utils';
import type { ProductCardProps } from './types';

function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card
      className={cn(
        'group h-full overflow-hidden transition-all duration-200 hover:shadow-lg',
        className
      )}
    >
      {product.imageUrl && (
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="space-y-2">
        <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
        {product.description && (
          <CardDescription className="line-clamp-2 text-sm">{product.description}</CardDescription>
        )}
      </CardHeader>
      {product.benefits && (
        <CardContent>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
              Benefícios
            </p>
            <p className="line-clamp-3 text-sm">{product.benefits}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export { ProductCard };
