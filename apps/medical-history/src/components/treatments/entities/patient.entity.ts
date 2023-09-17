import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { City } from '../../parametrics/entities/city.entity';
import { Parametric } from '../../parametrics/entities/parametric.entity';
import { Allergy } from './allergy.entity';

@Entity('patients')
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    fullname: string;

    @Column({ length: 100 })
    full_last_name: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 100 })
    mobile: string;

    @ManyToOne(() => Parametric, (parametric) => parametric.id)
    identification_type: Parametric;

    @Column({ length: 100 })
    identification: string;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({ length: 100 })
    address: string;

    @Column({ length: 100 })
    profession: string;

    @ManyToOne(() => City, (city) => city.id)
    city: City;

    @OneToMany(() => Allergy, (patient) => patient.patient, {
        nullable: true,
    })
    allergies: Allergy[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
