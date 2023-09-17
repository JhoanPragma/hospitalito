import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ParametricType } from "./parametric_type.entity";

@Entity('parametrics')
export class Parametric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    value: string;

    @ManyToOne(() => ParametricType, (parametricType) => parametricType.id)
    parametric_type: ParametricType;
}
