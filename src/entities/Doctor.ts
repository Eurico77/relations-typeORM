import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export { Doctor };