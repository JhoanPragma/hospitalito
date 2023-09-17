import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;
}
