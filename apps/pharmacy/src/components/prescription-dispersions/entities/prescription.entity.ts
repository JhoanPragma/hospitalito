import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Medicine } from "./medicine.entity";
import { Treatment } from "./treatment.entity";

@Entity('prescriptions')
export class Prescription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    details: string;

    @Column()
    dose: string;

    @Column()
    instructions: string;

    @ManyToOne(() => Treatment, (treatment) => treatment.prescription)
    treatment: Treatment;

    @ManyToMany(() => Medicine)
    @JoinTable({
        name: 'prescriptions_medicines'
    })
    medicines: Medicine[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
