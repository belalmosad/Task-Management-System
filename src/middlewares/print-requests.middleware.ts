import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class PrintRequests implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log(req.url);
		next();
	}
}
