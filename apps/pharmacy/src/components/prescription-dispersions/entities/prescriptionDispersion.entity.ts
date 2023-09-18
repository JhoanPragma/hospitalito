import { CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Prescription } from "./prescription.entity";
import { Pharmacy } from "./pharmacy.entity";

@Entity('prescription_dispersions')
export class PrescriptionDispercion {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Prescription)
    @JoinColumn()
    prescription: Prescription;

    @OneToOne(() => Pharmacy)
    @JoinColumn()
    pharmacy: Pharmacy;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
