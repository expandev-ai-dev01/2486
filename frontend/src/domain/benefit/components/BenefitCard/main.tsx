import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/card';
import { cn } from '@/core/lib/utils';
import { Leaf, Heart, Recycle, Award } from 'lucide-react';
import type { BenefitCardProps } from './types';

const iconMap = {
  natural: Leaf,
  health: Heart,
  sustainability: Recycle,
  premium: Award,
};

function BenefitCard({ benefit, className }: BenefitCardProps) {
  const IconComponent = iconMap[benefit.type] || Leaf;

  return (
    <Card className={cn('group h-full transition-all duration-200 hover:shadow-md', className)}>
      <CardHeader className="space-y-4">
        <div className="bg-primary/10 text-primary size-12 group-hover:bg-primary/20 flex items-center justify-center rounded-lg transition-colors">
          <IconComponent className="size-6" />
        </div>
        <CardTitle className="text-xl">{benefit.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {benefit.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export { BenefitCard };
