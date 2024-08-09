import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cupons')
export class Cupom {
  @PrimaryGeneratedColumn()
  cupom_id: number;

  @Column({ type: 'varchar', length: 100 })
  cupom_codigo: string;

  @Column({ type: 'varchar', length: 255 })
  cupom_titulo: string;

  @Column({ type: 'varchar', length: 255 })
  cupom_link_desconto: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  cupom_descricao: string;

  @Column({ type: 'timestamp' })
  cupom_data_hora_inicio: Date;

  @Column({ type: 'timestamp' })
  cupom_data_hora_termino: Date;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  cupom_valor_desconto: number;

  @Column({ type: 'int', default: 0 })
  cupom_quantidade_visualizacoes: number;

  @Column({ type: 'int', default: 0 })
  cupom_quantidade_cliques: number;

  @Column({ type: 'int', nullable: true })
  cupom_status_id: number;

  @Column({ type: 'int', nullable: true })
  cupom_periodo_id: number;

  @Column({ type: 'int', nullable: true })
  cupom_tipo_desconto_id: number;

  @Column({ type: 'int', nullable: true })
  cupom_categoria_id: number;
}
