import {Schema, Model, model} from "mongoose";
import {IScoreModel} from "../interfaces/IScoreModel";

/**
 * The schema of the score collection
 */
export const ScoreSchema: Schema = new Schema({
  user: String,
  score: String
});

/**
 * The score mongoose model
 */
export const Score: Model<IScoreModel> = model<IScoreModel>("Score", ScoreSchema);