import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export { Patient };