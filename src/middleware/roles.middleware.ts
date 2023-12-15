// roles.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userEmail = req['userEmail'];  // Replace with your actual implementation
    req['roles'] = getUserRoles(userEmail);  // Replace with your actual implementation
    next();
  }

  private getUserRoles(email: string): string[] {
    // Add your logic to retrieve roles based on the user's email
    // For example, query a database or use a predefined mapping
    // This is just a placeholder, replace it with your actual logic
    return email === 'admin@comwell.com' ? ['admin'] : ['user'];
  }
}
