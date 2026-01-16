import { useProductList } from '@/domain/product/hooks/useProductList';
import { useBenefitList } from '@/domain/benefit/hooks/useBenefitList';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { BenefitGrid } from '@/domain/benefit/components/BenefitGrid';
import { Separator } from '@/core/components/separator';

function HomePage() {
  const { products, isLoading: isLoadingProducts } = useProductList();
  const { benefits, isLoading: isLoadingBenefits } = useBenefitList();

  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">HORTelã</h1>
        <p className="text-muted-foreground max-w-2xl text-lg sm:text-xl">
          Produtos naturais de qualidade para o seu bem-estar
        </p>
      </section>

      <Separator className="mx-auto w-24" />

      {/* Benefits Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Por que escolher HORTelã?</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Conheça os benefícios dos nossos produtos naturais
          </p>
        </div>

        <BenefitGrid benefits={benefits} isLoading={isLoadingBenefits} />
      </section>

      <Separator className="mx-auto w-24" />

      {/* Products Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Nossos Produtos</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Explore nossa seleção de chás medicinais, temperos, plantas aromáticas e óleos
            essenciais
          </p>
        </div>

        <ProductGrid products={products} isLoading={isLoadingProducts} />
      </section>
    </div>
  );
}

export { HomePage };
