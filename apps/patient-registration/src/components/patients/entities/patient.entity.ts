import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

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

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({ length: 100 })
    address: string;

    @Column({ length: 100 })
    profession: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
}
