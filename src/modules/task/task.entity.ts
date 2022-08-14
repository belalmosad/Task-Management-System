import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusEntity } from "../status/status.entity";
import { UserEntity } from "../user/user.entity";

@Entity('task')
export class TaskEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: "varchar",
    })
    title: string

    @ManyToOne(() => UserEntity, userEntity => userEntity.tasks)
    user: UserEntity

    @ManyToOne(() => StatusEntity, statusEntity => statusEntity.id)
    @JoinColumn()
    status: StatusEntity
}