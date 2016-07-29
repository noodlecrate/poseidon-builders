import { Models as EntityModels } from 'noodlecrate-poseidon-entities';

export namespace Models {

    export class BrandModelBuilder {

        public withId(id: number): BrandModelBuilder;
        public withName(name: string): BrandModelBuilder;
        public build(): EntityModels.BrandModel;

    }

    export class NoodleModelBuilder {

        public withId(id: number): NoodleModelBuilder;
        public withName(name: string): NoodleModelBuilder;
        public build(): EntityModels.NoodleModel;

    }

    export class UserModelBuilder {

        public withId(id: number): UserModelBuilder;
        public withUsername(username: string): UserModelBuilder;
        public withPassword(password: string): UserModelBuilder;
        public withFirstName(firstName: string): UserModelBuilder;
        public withLastName(lastName: string): UserModelBuilder;
        public withProfileImage(profileImage: string): UserModelBuilder;
        public build(): EntityModels.UserModel;

    }

    export class ReviewModelBuilder {

        public withId(id: number): ReviewModelBuilder;
        public withAuthor(author: EntityModels.UserModel): ReviewModelBuilder;
        public withTitle(title: string): ReviewModelBuilder;
        public withBody(body: string): ReviewModelBuilder;
        public withImageUrl(imageUrl: string): ReviewModelBuilder;
        public build(): EntityModels.ReviewModel

    }

}
