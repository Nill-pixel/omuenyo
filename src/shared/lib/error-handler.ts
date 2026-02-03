export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: any,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: any): {
  message: string;
  status?: number;
} {
  if (error.response) {
    // Resposta recebida com código de erro
    return {
      message: error.response.data?.message || "Erro no servidor",
      status: error.response.status,
    };
  } else if (error.request) {
    // Requisição feita mas sem resposta
    return {
      message: "Sem conexão com o servidor. Verifique sua internet.",
    };
  } else {
    // Erro durante a configuração da requisição
    return {
      message: error.message || "Erro desconhecido",
    };
  }
}
