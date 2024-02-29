import { CronJob } from "cron";


type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
     static createJob( cronTime: CronTime, onTick: OnTick){
        console.log("Cron started");
        const job = new CronJob(cronTime, onTick );
         job.start() 

         return job;
    }
}