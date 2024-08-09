export interface ICupom {
    cupom_id?: number;
    cupom_codigo: string;
    cupom_titulo: string;
    cupom_link_desconto: string;
    cupom_descricao?: string;
    cupom_data_hora_inicio: Date;
    cupom_data_hora_termino: Date;
    cupom_valor_desconto: number;
    cupom_quantidade_visualizacoes?: number;
    cupom_quantidade_cliques?: number;
    cupom_status_id?: number;
    cupom_periodo_id?: number;
    cupom_tipo_desconto_id?: number;
    cupom_categoria_id?: number;
  }
  