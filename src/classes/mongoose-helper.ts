import { IScoreModel } from "../interfaces/IScoreModel";
import { Score } from "../mongo/score-model";
import { IScore } from "../interfaces/IScore";
import { resolve } from "path";
import { rejects } from "assert";

/**
 * static class to provide functions helping with the gathering, checking and manipulation of data for mongo database
 */
export class MongooseHelper {
  static highScoreListSize: number = 100;
  /**
   * Gets high-score list
   */
  public static getHighScores(): Promise<IScoreModel[]> {
    return new Promise((resolve, reject) => {
      Score.find((err, data) => {
        if (err) {reject(err);} else {resolve(data);}
      });
    });
  }
  /**
   * Gets the lowest high score on the high score list
   */
  public static lowestHighScore(): Promise<IScoreModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const scores: IScoreModel[] = await MongooseHelper.getHighScores();
        let lowestScore: IScoreModel = scores[0];
        for(let i: number = 0; i < scores.length; i++) {
          scores[i].score < lowestScore.score ? lowestScore = scores[i] : lowestScore = lowestScore;
        }
        resolve(lowestScore);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Takes the users score and checks if it is a high score.
   * @param score users score
   */
  public static isHighScore(score: number): Promise<boolean> {
    return new Promise( async (resolve, reject) => {
      try {
        const lowestScore: IScoreModel = await MongooseHelper.lowestHighScore();
        lowestScore.score < score ? resolve(true) : resolve(false);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Method to remove the lowest high-score. Used when saving a new high score
   */
  public static removeLowestHighScore(): Promise<IScoreModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const lowestScore: IScoreModel = await MongooseHelper.lowestHighScore();
        lowestScore.remove((err, removed) => {
          err ? reject(err) : resolve(removed);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Method to save new high-score
   * @param score the new high-score
   */
  public static saveNewHighScore(score: IScore): Promise<IScoreModel> {
    return new Promise(async (resolve, reject) => {
      try {
        const removedScore: IScoreModel = await MongooseHelper.removeLowestHighScore();
        const newHighScore: IScoreModel = new Score({
          user: score.user,
          score: score.score
        });
        const savedScore: IScoreModel = await newHighScore.save();
        resolve(savedScore);
      } catch (e) {
        reject(e);
      }
    });
  }
}