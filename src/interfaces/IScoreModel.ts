import {Document} from "mongoose";
import {IScore} from "./IScore";
export interface IScoreModel extends IScore, Document {}