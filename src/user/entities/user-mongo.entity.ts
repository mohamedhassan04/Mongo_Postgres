import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MongoUser {
  @Prop({ required: true })
  birthdate: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop()
  gender: string;

  @Prop({ default: 'free' })
  subscribeType: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const MongoUserSchema = SchemaFactory.createForClass(MongoUser);
