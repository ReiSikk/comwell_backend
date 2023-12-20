import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()

export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const role = request.user.role;
        if (user && role === 'admin') {
            return true;
        }

        throw new ForbiddenException('You do not have permission to perform this action');
    }
}