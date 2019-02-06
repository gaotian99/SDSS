import { Team } from "./team";

export class Match {

    constructor(
            public location: string,
            public startDate: Date,
            public teams?: Team[],
    ){ }

    
    
}
