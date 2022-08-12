import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
export class StatusEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        type: "varchar",
        length: 20,
        default: 'Pending',
        enum: ['Pending', 'Completed']
    })
    title: string
}