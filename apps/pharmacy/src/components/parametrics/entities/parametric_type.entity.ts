import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parametric_types')
export class ParametricType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    value: string;
}