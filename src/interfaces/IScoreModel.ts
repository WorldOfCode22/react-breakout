import {Document} from "mongoose";
import {IScore} from "./IScore";
/**
 * Score Model interface that extends IScore into Mongoose.Document
 */
export interface IScoreModel extends IScore, Document {}