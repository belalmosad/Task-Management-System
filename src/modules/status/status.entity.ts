import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class StatusEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        type: "varchar",
        length: 20,
        default: 'Pending'
    })
    title: string
}