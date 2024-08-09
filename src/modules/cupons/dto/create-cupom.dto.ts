import { IsString, IsNumber, IsOptional, IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCupomDto {
  @IsString()
  @IsNotEmpty()
  readonly cupom_codigo: string;

  @IsString()
  @IsNotEmpty()
  readonly cupom_titulo: string;

  @IsString()
  @IsNotEmpty()
  readonly cupom_link_desconto: string;

  @IsString()
  @IsOptional()
  readonly cupom_descricao?: string;

  @IsDate()
  readonly cupom_data_hora_inicio: Date;

  @IsDate()
  readonly cupom_data_hora_termino: Date;

  @IsNumber()
  readonly cupom_valor_desconto: number;

  @IsNumber()
  @IsOptional()
  readonly cupom_quantidade_visualizacoes?: number;

  @IsNumber()
  @IsOptional()
  readonly cupom_quantidade_cliques?: number;

  @IsInt()
  @IsOptional()
  readonly cupom_status_id?: number;

  @IsInt()
  @IsOptional()
  readonly cupom_periodo_id?: number;

  @IsInt()
  @IsOptional()
  readonly cupom_tipo_desconto_id?: number;

  @IsInt()
  @IsOptional()
  readonly cupom_categoria_id?: number;
}
