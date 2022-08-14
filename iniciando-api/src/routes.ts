import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'Fundamentos Node',
    educator: 'Victor',
    duration: 10,
  });
  CreateCourseService.execute({
    name: 'React JS',
    educator: 'Elias',
  });
  return response.send();
}
