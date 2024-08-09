export class CupomDto {
    readonly cupom_id: number;
    readonly cupom_codigo: string;
    readonly cupom_titulo: string;
    readonly cupom_link_desconto: string;
    readonly cupom_descricao?: string;
    readonly cupom_data_hora_inicio: Date;
    readonly cupom_data_hora_termino: Date;
    readonly cupom_valor_desconto: number;
    readonly cupom_quantidade_visualizacoes: number;
    readonly cupom_quantidade_cliques: number;
    readonly cupom_status_id?: number;
    readonly cupom_periodo_id?: number;
    readonly cupom_tipo_desconto_id?: number;
    readonly cupom_categoria_id?: number;
  }
  