import { useMutation } from '@tanstack/react-query';
import { contactService } from '../../services/contactService';
import type { ContactFormOutput } from '../../validations/contact';

export const useContactSubmit = () => {
  const {
    mutateAsync: submit,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: ContactFormOutput) => contactService.create(data),
  });

  return {
    submit,
    isSubmitting: isPending,
    error,
  };
};
