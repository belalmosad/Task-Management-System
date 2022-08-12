import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "../task/task.entity";

@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
        type: "varchar",
        length: 50
    })
    username: string

    @Column({
        nullable: false,
        select: false
    })
    password: string;

    @OneToMany(() => TaskEntity, taskEntity => taskEntity.user)
    @Column("int", {
        array: true
    })
    tasks: TaskEntity[];
}