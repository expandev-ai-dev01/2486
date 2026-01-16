import { cn } from '@/core/lib/utils';
import { Skeleton } from '@/core/components/skeleton';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/core/components/empty';
import { BenefitCard } from '../BenefitCard';
import type { BenefitGridProps } from './types';

function BenefitGrid({ benefits, isLoading = false, className }: BenefitGridProps) {
  if (isLoading) {
    return (
      <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4', className)}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="h-12 w-12 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!benefits?.length) {
    return (
      <Empty className="min-h-[300px]">
        <EmptyHeader>
          <EmptyTitle>Nenhum benefício encontrado</EmptyTitle>
          <EmptyDescription>Não há benefícios disponíveis no momento.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent />
      </Empty>
    );
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4', className)}>
      {benefits.map((benefit) => (
        <BenefitCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
}

export { BenefitGrid };
