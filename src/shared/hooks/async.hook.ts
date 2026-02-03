import { useCallback, useState } from "react";
import { showToast } from "@/src/shared/utils/toast";

interface UseAsyncOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  showToast?: boolean;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  options?: UseAsyncOptions,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await asyncFunction();
      setData(response);

      if (options?.showToast) {
        showToast.success("Operação concluída com sucesso");
      }

      options?.onSuccess?.(response);
      return response;
    } catch (err: any) {
      const errorMessage = err.message || "Algo deu errado";
      setError(new Error(errorMessage));

      if (options?.showToast) {
        showToast.error(errorMessage);
      }

      options?.onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction, options]);

  return { loading, error, data, execute };
}
