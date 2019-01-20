import { Request, Response } from "express"
export class Controller {

    public get(req: Request, res: Response) {
        return res.json({
            error: true,
            messsage: "city name not found in DB :("
        });
    }
}