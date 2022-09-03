import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {
  @Field()
  name: string;
}
