import {Schema, Model, model} from "mongoose";
import {IScoreModel} from "../interfaces/IScoreModel";

export const ScoreSchema: Schema = new Schema({
  user: String,
  score: String
});

export const Score: Model<IScoreModel> = model<IScoreModel>("Score", ScoreSchema);