import { Models as EntityModels } from 'noodlecrate-poseidon-entities';

export namespace Models {

    export class BrandModelBuilder {

        public withId(id: number): BrandModelBuilder;
        public withName(name: string): BrandModelBuilder;
        public build(): EntityModels.BrandModel;

    }

}
