import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';
import { toast } from 'sonner';
import { contactSchema } from '../../validations/contact';
import { useContactSubmit } from '../../hooks/useContactSubmit';
import type { ContactFormInput, ContactFormOutput } from '../../validations/contact';
import type { ContactFormProps } from './types';
import { Button } from '@/core/components/button';
import { Input } from '@/core/components/input';
import { Label } from '@/core/components/label';
import { cn } from '@/core/lib/utils';

function ContactForm({ onSuccess, className }: ContactFormProps) {
  const { submit, isSubmitting } = useContactSubmit();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput, unknown, ContactFormOutput>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: ContactFormOutput) => {
    try {
      const sanitizedData = {
        ...data,
        name: DOMPurify.sanitize(data.name),
        email: DOMPurify.sanitize(data.email),
        phone: data.phone ? DOMPurify.sanitize(data.phone) : undefined,
      };

      await submit(sanitizedData);
      toast.success('Obrigado! Entraremos em contato em breve');
      reset();
      onSuccess?.();
    } catch (error) {
      toast.error('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-6', className)}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome completo"
          aria-invalid={!!errors.name}
          disabled={isSubmitting}
          {...register('name')}
        />
        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
          {...register('email')}
        />
        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          aria-invalid={!!errors.phone}
          disabled={isSubmitting}
          {...register('phone')}
        />
        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Enviando...' : 'Entrar em Contato'}
      </Button>
    </form>
  );
}

export { ContactForm };
