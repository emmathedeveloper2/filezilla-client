import { sleep } from 'app/lib'
import { useState } from 'react'

type CustomFormProps<T = any, E = Error> = {
  className?: string;
  action?: (form: Record<string, string>) => Promise<T>;
  children: (data: { isFetching: boolean; data: T | undefined; error: E | undefined }) => any;
};

const CustomForm = <T, E = Error>({ children, className, action }: CustomFormProps<T , E>) => {

  const [isFetching, setIsFetching] = useState(false);

  const [data, setData] = useState<T | undefined>(undefined);
  
  const [error, setError] = useState<E | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = Object.fromEntries(new FormData(e.currentTarget));

      try {
          setData(undefined);
          setError(undefined);
          setIsFetching(true);

          await sleep(2000);
          const result = await action?.(formData as Record<string, string>);

          setData(result);
      } catch (err) {
          setError(err as E);
      } finally {
          setIsFetching(false);
      }
  };

  return (
      <form onSubmit={handleSubmit} className={className}>
          {children({ isFetching, data, error })}
      </form>
  );
};

export default CustomForm;
