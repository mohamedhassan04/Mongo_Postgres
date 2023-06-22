// user.entity.ts (Postgres)
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PostgresUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @Column()
  phoneNumber: string;

  @Column()
  gender: string;

  @Column({ default: 'free' })
  subscribeType: string;
}
